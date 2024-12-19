import axios from "axios";
import styles from "../../assets/styles/UserStyle/pedidos.module.css";
import { useEffect, useState } from "react";
import Loading from "../utils/Loading";
import Error from "../utils/Error"
function Pedidos(){
    const current_session = JSON.parse(localStorage.getItem('id'))
    const [html, setHtml] = useState(false)
    const [htmlError, setHtmlError] = useState(false)
    const [semPedidos, setSemPedidos] = useState(false)
    const [pedidos, setPedidos] = useState(null)
    useEffect(()=>{
        axios.get(`http://localhost:8000/pedido/${current_session.id}`)
        .then((response)=>{
            console.log(response)
            setPedidos(response.data.pedidos)
            if(response.data.pedidos.length >0){
                setHtml(true)
            }
            else{
                setSemPedidos(true)
            }
        })
        .catch((response)=>{
            console.log(response)
            setHtmlError(true)
        })
    },[])

    if(semPedidos){
        return(
            <h1 className={styles.sem_pedido}>Você não tem nenhum pedido</h1>
        )
    }

    if(htmlError){
        return(
            <Error/>
        )
    }
    
    if(!html){
        return (
            <Loading/>
        )
    }
    if(html){
        return(
            <>
                <div className={styles.pedidos_container}>
                    <h1 className={styles.titulo}>{`Ola ${current_session.nome_usuario}. Seus pedidos:`}</h1>
                    <div className={styles.pedidos_lista}>
                        {pedidos.map((pedido) => (
                        <div key={pedido.id} className={styles.pedido_card}>
                            <img src={pedido.img}
                                width={"500px"}
                            />
                            <h2>{pedido.cafe}</h2>
                            <p>Preço: {pedido.preco}</p>
                            <p>Marca: {pedido.marca}</p>
                            <p>Data de vencimento: {pedido.ano_vencimento}</p>
                        </div>
                        ))}
                    </div>
                    {/* <div className={styles.pedidos_total}>
                        <h2>Total: R$ {total}</h2>
                    </div> */}
                </div>
            </>
        )
    }
}

export default Pedidos;
import axios from "axios"
import { useEffect, useState,  } from "react"
import styles from "../../assets/styles/cafes.module.css";
import Loading from "../utils/Loading";
import Error from "../utils/Error"
import { Navigate } from "react-router-dom";


function Carrinho(){

    const current_session = JSON.parse(localStorage.getItem('id'))
    const [html, setHtml] = useState(false)
    const [htmlError, setHtmlError] = useState(false)
    const [Cafedata, setCafedata] = useState(null)
    const [preco, setPreço] = useState(null)
    const [redirect, setRedirect] = useState(false)


    function criarPedido(){
        //So deixa fazer a requisição caso exista pelo menos 1 item dentro do array cafeData
        //Nao faz sentido tentar criar o pedido do carrinho se n existir nada no carrinho cabeça de tabaco
        if(Cafedata.length > 0){
            axios.post("http://localhost:8000/criarPedido",
                {
                    user:JSON.parse(localStorage.getItem('id')),
                    itens:Cafedata
                }
            )
            .then((res)=>{
                console.log(res)
                //Redireciona para a pagina de pedidos para exibir os pedidos
                setRedirect(true)
            })
        }
        else{
            window.alert("Você não tem nenhum item no seu carrinho para fazer um pedido")
        }

    }

    useEffect(()=>{
        console.log(current_session)
            axios.get(`http://localhost:8000/ItensCarrinho/${current_session.id}`)
            .then((response)=>{
                console.log("Resposta requisição:", response.data.data_info)
                setCafedata(response.data.data_info.resultado)
                setPreço(response.data.data_info.preco_total)
                setHtml(true)
            })
            .catch((response)=>{
                console.log("catch")
                console.log("Resposta requisição:", response)
                setHtmlError(true)
            })
        
    }, [])

    if(redirect){
        return <Navigate to="../pedidos" replace/>
    }


    if(htmlError){
        return(
            <Error/>
        )
    }

    if(!html){
        return(
            <Loading/>
        )
    }
    if(html){
        return(
            <>
                <article className={styles.table_section}>
                    <h2 className={styles.table_title}>{`Carrinho de ${current_session.nome_usuario}`}</h2>
                    <table className={styles.coffee_table}>
                        <thead>
                            <tr>
                                <th>Nome do Café</th>
                                <th>Preço</th>
                                <th>Marca</th>
                                <th>Ano de vencimento</th>
                                <th>Caminho da Imagem</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Cafedata?.map((cafe)=>(    
                            <tr key={cafe.id}>
                                <td>{cafe.nome_cafe}</td>
                                <td>R${cafe.preco}</td>
                                <td>{cafe.marca}</td>
                                <td>{cafe.ano_vencimento}</td>
                                <img src={cafe.img}
                                    width={100}
                                />
                                {/* <td>
                                    <button className={styles.edit_button}><Link to={`../editarCafeId?id=${cafe.id}`}>Editar</Link></button>
                                    <button className={styles.delete_button} onClick={()=>requestDelet(cafe.id)}>Excluir</button>
                                </td>    */}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                <div className={styles.total_carrinho}>
                    <h3 className={styles.price}>Total: R${preco}</h3>
                    <button onClick={()=>{
                        criarPedido()
                    }}>Realizar Pedido</button>
                </div>
                </article>
            </>
        )
    }
}

export default Carrinho
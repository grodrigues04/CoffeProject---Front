import styles from "../../assets/styles/loja.module.css"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import Loading from "../utils/Loading";
import Error from "../utils/Error";
import Header from "../utils/Header";
import axios from "axios";

function Loja(){
    const [cafes, setCafes] = useState([])
    const [html, setHtml] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch("http://localhost:8000")
                if(response.ok){
                    let jsonData = await response.json()
                    console.log(jsonData)
                    setCafes(jsonData)
                    setHtml(true)
                }
            }
            catch(error){
                console.log("Requisicao falhou")
                setCafes(error)
                setError(true)
            }
        }

        fetchData()
    }, [])
    if(error){
        return(
            <>
                <Header
                home="../"
                loja="../loja"
                novocafe="../novocafe"
                cafes="../cafes"
                />
                <Error/>
            </>
        )
    }


    if(!html){
        return(
            <Loading/>
        )
    }
 
    if(html){
        async function addToCart(item_id, nome_cafe){
            const userObject = JSON.parse(localStorage.getItem("id"))
            console.log(userObject)
            const user_id = userObject.id
            console.log("id", user_id)
            const respose = await axios.post("http://localhost:8000/novoItemCarrinho",
                {
                    body:{"id_item":item_id, "id_user":user_id}
                }
            ).then((res)=>{
                window.alert(`${nome_cafe} foi adicionado ao seu carrinho! `)
            })
            .catch((res)=>{ 
                window.alert(`Ocorreu um erro ao tentar adicionar ao carrinho: ${res}`)
            })

        }
        

        return(
            <>
                <Header
                home="../"
                loja="../loja"
                novocafe="../novocafe"
                cafes="../cafes"
                /> 
                <section className={styles.recipe_intro}>
                    <h1 className={styles.section_main_text}>Descubra novas receitas deliciosas</h1>
                </section>

                <section className={styles.recipe_grid}>
                    <article className={styles.recipe_card}>
                        {cafes.map((item) => (
                            <div key={item.id} className={styles.cafe_container}>
                                <h3>{item.nome_cafe}</h3>
                                <img src={item.img} alt={`img de ${item.nome_cafe}`} className={styles.img_config}/>
                                <div className={styles.cafe_container_infos}>
                                    <p>Preço: R${item.preco}</p>
                                    <p>Vencimento: {item.ano_vencimento}</p>
                                </div>
                            <button onClick={()=>{
                                addToCart(item.id, item.nome_cafe)
                            }}>Adicionar ao carrinho</button>
                            </div>
                        ))}
                    </article>

                </section>
            </>
        )
    }
}

export default Loja;
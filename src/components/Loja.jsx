
import styles from "../assets/styles/loja.module.css"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import Header from "./Header";
function Loja(){
    const [cafes, setCafes] = useState([])
    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch("http://localhost:8000")
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                console.log(data)
                setCafes(data)
            })
            .catch((error)=>{
                setCafes(error)
            })
        }

        fetchData()
    }, [])

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
                        </div>
                    ))}
                </article>

            </section>
        </>
    )
}

export default Loja;
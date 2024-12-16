import styles from "../../assets/styles/cafes.module.css";
import { useEffect, useState } from "react";
import Header from "../utils/Header";
import { Link } from "react-router-dom";
import Loading from "../utils/Loading";
import Error from "../utils/Error"
function Cafes() {
    const [cafes, setCafes] =   useState([])
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
                setCafes(error)
                setError(true)
            }
        }

        fetchData()
    }, [])

    function requestDelet(id){
        const response = fetch(`http://localhost:8000/cafe/${id}`,{
            method:"DELETE"
        })
        .then((res) =>{
            res.json()
        })
        window.location.reload(false);
    }

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
        return (
            <>
                <Header
                home="../"
                loja="../loja"
                novocafe="../novocafe"
                cafes="../cafes"
                />
                <article className={styles.table_section}>
                    <h2 className={styles.table_title}>Lista de Cafés</h2>
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
                        {cafes.map((cafe)=>(
                            <tr key={cafe.id}>
                                <td>{cafe.nome_cafe}</td>
                                <td>R${cafe.preco}</td>
                                <td>{cafe.marca}</td>
                                <td>{cafe.ano_vencimento}</td>
                                <td>{cafe.img}</td>
                                <td>
                                    <button className={styles.edit_button}><Link to={`../editarCafeId?id=${cafe.id}`}>Editar</Link></button>
                                    <button className={styles.delete_button} onClick={()=>requestDelet(cafe.id)}>Excluir</button>
                                </td>   
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </article>
            </>
        );
    }
}

export default Cafes;
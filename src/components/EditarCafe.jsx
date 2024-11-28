import styles from "../assets/styles/NovoCafe.module.css";
import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom";
import Loading from "./Loading"

function EditarCafe(props){
    const queryParameters = new URLSearchParams(window.location.search)
    const cafeId = queryParameters.get("id")
    const [cafe, setCafe] = useState([])
    const [html, setHtml] = useState(false)
    const [error, setError] = useState(false)
    const [newcoffe, setNewcoffe] = useState(false)
    useEffect(()=>{
        const fetchCafe = async function(){
            try{
                console.log("SOU EU QUE TO RODANDO")
                const response = await fetch(`http://localhost:8000/cafe/${cafeId}`)
                if(response.ok){
                    const jsonResponse = await response.json()
                    setCafe(jsonResponse[0])
                    console.log(jsonResponse)
                    setHtml(true)
                   }
                }
            catch(e){
                console.log("cai aqui de parequedas")
                setError(true)
                setHtml(false)
            }
        }

        fetchCafe()
    }
    ,[])
    
    async function submite(e){
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/cafe/${cafeId}`, 
            {
                method:"PUT",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cafe),

            })
        let JsonResponse = await response.json()
        if(JsonResponse.code == 200){
            setNewcoffe(true) 
        }
    }

    if(newcoffe){
        return <Navigate to="../cafes" replace />
    }

    const handleChange = function(e){
        e.preventDefault();
        const {name, value} = e.target; //pega as propriedades name(nome do campo) e o valor atual dele.

        setCafe((prevCafe) => ({
            ...prevCafe, //faz uma copia de como esta o estado atual
            [name]:value // e muda apenas o que foi alterado
        }))
    }


    if(error){  
        console.log(html)
        return(
            <>
                <h2> Falha ao carregar seus dados</h2>
            </>
        )
    }

    if(!html){
        console.log(html)
        return(
            <Loading/>
        )
    }
    else{
        console.log(html)
        return(
            <>
                <h1 className={styles.title}>Alterando o {cafe.nome_cafe}</h1>
                <article className={styles.teste}>
                    <div className={styles.recipe_form_section}>
                        <h2>Edite seu Café</h2>
                        <form action={`http://localhost:8000/cafe/${cafeId}`} onSubmit={submite} method="PUT" className={styles.recipe_form}>
                            <label for="nome">Nome do Café</label>
                            <input type="text" id="recipe_name" name="nome_cafe" required value={cafe.nome_cafe} onChange={handleChange}/>
                            
                            <label for="ingredients">Preço</label>
                            <input type="number" id="ingredients" name="preco" required value={cafe.preco} onChange={handleChange}/>
                            
                            <label for="instructions">Marca</label>
                            <input type="text" id="recipe_name" name="marca" required value={cafe.marca} onChange={handleChange}/>
                            
                            <label for="ingredients">Ano de vencimento</label>
                            <input type="number" id="ingredients" name="ano_vencimento" required value={cafe.ano_vencimento} onChange={handleChange}/>

                            <label for="img">Url da Imagem</label>
                            <input type="url" id="ingredients" name="img" value={cafe.img} onChange={handleChange}/>
                            <input type="submit" value="Enviar Receita"/>
                        </form>
                    </div>
                </article>
            </>
        )
    }
}
export default EditarCafe;
 
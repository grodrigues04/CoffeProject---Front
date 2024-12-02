import { useState } from "react";
import styles from "../assets/styles/NovoCafe.module.css"
import Header from "./Header";
import { Navigate  } from 'react-router-dom';

function CafeId(){
    const [redirect, setRedirect] = useState(false)
    async function submiteForm(e){
        e.preventDefault();
        const formData = new FormData(e.target); //Coleta os dados digitados do form
        const data = Object.fromEntries(formData.entries()); //transforma em um objeto javascript
        const response = await fetch("http://localhost:8000/createcofe",
            { 
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        )

        if(response.status == 201){
            setRedirect(true)
        }

    }
    if(redirect){
        return <Navigate to="../loja" replace />;
    }


    return(
        <>
            <Header
            home="../"
            loja="../loja"
            novocafe="../novocafe"
            cafes="../cafes"
            />
            <article className={styles.teste}>
                <div className={styles.recipe_form_section}>
                    <h2>Envie seu Café!</h2>
                    <form className={styles.recipe_form} onSubmit={submiteForm}>
                        <label for="nome">Nome do Café</label>
                        <input type="text" id="recipe_name" name="nome_cafe" required placeholder="Ex: Cappuchino"/>
                        
                        <label for="ingredients">Preço</label>
                        <input type="number" id="ingredients" name="preco" required placeholder="R$"/>
                        
                        <label for="instructions">Marca</label>
                        <input type="text" id="recipe_name" name="marca" required placeholder="Marca"/>
                        
                        <label for="ingredients">Ano de vencimento</label>
                        <input type="number" id="ingredients" name="ano_vencimento" required/>

                        <label for="img">Url da Imagem</label>
                        <input type="url" id="ingredients" name="img"/>
                        <input type="submit" value="Enviar Receita"/>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </article>
        </>
    )
}

export default CafeId;
import styles from "../assets/styles/NovoCafe.module.css"
function CafeId(){
    return(
        <article className={styles.teste}>
        <div className={styles.recipe_form_section}>
            <h2>Envie seu Café!</h2>
            <form action="http://localhost:8000/createcofe" method="POST" className={styles.recipe_form}>
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
            </form>
        </div>
    </article>
    )
}

export default CafeId;
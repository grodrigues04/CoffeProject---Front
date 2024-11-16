import styles from "../assets/styles/revenues.module.css"

function Revenues(){
    return(
        <>
            <header>
                <p className={styles.icon_text}>BALLECOFFE</p>
                <div className={styles.header_text_navegation}>
                    <p className={styles.navegation_home_text}>Home</p>
                    <p className={styles.navigation_extra_text}><a href="receitas.html">Receitas</a></p>
                    <p className={styles.navigation_extra_text}>Novidades</p>
                    <p className={styles.navigation_extra_text}>Melhor avaliadas</p>
                </div>
                <p className={styles.extra_text_header}>Github</p>
            </header>
            <main>
                <section className={styles.recipe_intro}>
                    <h4 className={styles.section_subtitle}>RECEITAS</h4>
                    <h1 className={styles.section_main_text}>Descubra novas receitas deliciosas</h1>
                    <p className={styles.section_about_text}>Explore e aprenda como preparar bebidas únicas e saborosas!</p>
                </section>

                <section className={styles.recipe_grid}>
                    <article className={styles.recipe_card}>
                        <img src="images/coffee1.png" alt="Cappuccino" className={styles.recipe_image}/>
                        <h3>Cappuccino</h3>
                        <p>Uma bebida cremosa e doce para amantes de café.</p>
                    </article>
                    <article className={styles.recipe_card}>
                        <img src="images/coffee2.png" alt="Frappuccino" className={styles.recipe_image}/>
                        <h3>Frappuccino</h3>
                        <p>Refrescante e cheio de sabor, perfeito para dias quentes.</p>
                    </article>
                    <article className={styles.recipe_card}>
                        <img src="images/coffee3.png" alt="Espresso" className={styles.recipe_image}/>
                        <h3>Espresso</h3>
                        <p>Um clássico intenso e robusto para os amantes de café puro.</p>
                    </article>
                </section>
            </main>
            <article className={styles.teste}>
                <div className={styles.recipe_form_section}>
                    <h2>Envie seu Café!</h2>
                    <form action="http://localhost:5500/cafe" method="POST" className={styles.recipe_form}>
                        <label for="recipe_name">Nome do Café</label>
                        <input type="text" id="recipe_name" name="cafe_nome" required placeholder="Ex: Bolo de Chocolate"/>
                        
                        <label for="ingredients">Preço</label>
                        <input type="number" id="ingredients" name="preco" required placeholder="R$"/>
                        
                        <label for="instructions">Marca</label>
                        <input type="text" id="recipe_name" name="marca" required placeholder="Marca"/>
                        
                        <label for="ingredients">Ano de vencimento</label>
                        <input type="number" id="ingredients" name="ano_de_vencimento" required/>
                        <input type="submit" value="Enviar Receita"/>
                    </form>
                </div>
            </article>
            <footer>
                <h5>Copyright &lt;CODEFEE /&gt; 2023</h5>
                <p>Feito com muito amor e carinho pro meu chef</p>
            </footer>
        </>
    )
}

export default Revenues;
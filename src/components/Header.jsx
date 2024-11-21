import styles from "../assets/styles/header.module.css"
import { Link } from 'react-router-dom'
function Header(props){
    return(
        <>
            <header>
                <p className={styles.icon_text}>BALLECOFFE</p>
                <div className={styles.header_text_navegation}>
                    <p className={styles.navegation_home_text}>Home</p>
                    <p className={styles.navigation_extra_text}><Link to={"./loja"}>Loja</Link></p>
                    <p className={styles.navigation_extra_text}><Link to={"./novocafe"}>Adicionar Café</Link></p>
                    <p className={styles.navigation_extra_text}>Melhor avaliadas</p>
                </div>
                <p className={styles.extra_text_header}>Github</p>
            </header>
        </>
    )
}

export default Header;
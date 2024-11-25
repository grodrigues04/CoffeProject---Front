import styles from "../assets/styles/header.module.css"
import { Link } from 'react-router-dom'
function Header(props){
    return(
        <>
            <header>
                <p className={styles.icon_text}>BALLECOFFE</p>
                <div className={styles.header_text_navegation}>
                    <p><Link to={props.home} className={styles.navegation_home_text}>Home</Link></p>
                    <p><Link to={props.loja} className={styles.navegation_home_text}>Loja</Link></p>
                    <p><Link to={props.novocafe} className={styles.navegation_home_text}>Adicionar Café</Link></p>
                    <p><Link to={props.cafes} className={styles.navegation_home_text}>Editar Cafés</Link></p>
                </div>
                <p className={styles.extra_text_header}>Github</p>
            </header>
        </>
    )
}

export default Header;
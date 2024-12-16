import styles from "../../assets/styles/notfound.module.css"
import Header from "./Header";
function NotFound(){
    return (
        <>
            <Header
            home="../"
            loja="../loja"
            novocafe="../novocafe"
            cafes="../cafes"
            />
            <h2>Pagina não encontrada! Tente verificar sua IRL</h2>
        </>
    )
}

export default NotFound;
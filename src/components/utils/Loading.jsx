import styles from "../../assets/styles/loading.module.css"
function Loading(){
    return(
        <>
            <div className={styles.main_div}>
                <h2>Carregando seus dados...</h2>
                <div className={styles.loader}></div>
            </div>
        </>
    )
}
export default Loading;
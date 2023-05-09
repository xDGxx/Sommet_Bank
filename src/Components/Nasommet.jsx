import styles from "./Nasommet.module.css"
import moca from "../Imagens/final.png"
function Nasommet(){
    return(
        <div className={styles.fundo}>
           <img src={moca} alt="moça sorrindo" />
           <h2>Esteja no ápice das suas <br />finanças, esteja sempre um <br />passo a frente. </h2>
           <h1>Esteja com a Sommet!</h1>
           <div className={styles.button}>
                <p>Abra uma conta sommet</p>
                </div>
        </div>
    )
}
export default Nasommet
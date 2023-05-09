import styles from "./Cartao.module.css"
import cartao from "../Imagens/ocard.png"
function Cartao(){
    return(
        <div>
            <div className={styles.card}>
                <img src={cartao} alt="imagem do cartão" />
                <h1>Peça já seu<br />Sommet Card</h1>
                <h2>E fuja da anuidade !</h2>

            </div>
        </div>
    )
}

export default Cartao
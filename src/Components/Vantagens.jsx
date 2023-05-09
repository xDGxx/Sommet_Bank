import styles from "./Vantagens.module.css"
import {BsPhoneFill} from "react-icons/bs"
import {BsFillCreditCardFill} from "react-icons/bs"
import {BsCoin} from "react-icons/bs"
import {RiCoupon3Fill} from "react-icons/ri"

function Vantagens() {
    return (
        <div>
            <div className={styles.fundo}>
                <div className={styles.texto}>
                    <h1>Só na Sommet</h1>
                </div>
                <div className={styles.box}>
                    <BsPhoneFill className={styles.phone}/>
                    <h5>Conta digital</h5>
                    <p>De uma forma fácil e prática,<br /> Dê adeus as filas</p>
                </div>

                <div className={styles.box}>
                    <BsFillCreditCardFill  className={styles.cartao}/>
                    <h5>Cartão sem anuidade</h5>
                    <p>Não tenha dor de cabeça <br />aquelas faturas do seu cartão <br />tradicional</p>
                </div>

                <div className={styles.box}>
                    <BsCoin className={styles.coin}/>
                    <h5>Cripto Moedas</h5>
                    <p>Invista em Cripto Moedas de<br /> forma segura com a gente!</p>
                </div>

                <div className={styles.box}>
                    <RiCoupon3Fill className={styles.cupon}/>
                    <h5>Descontos na loja</h5>
                    <p>Tenha descontos em<br /> eletrônicos em lojas parceiras </p>
                </div>
            </div>
        </div>
    )
}

export default Vantagens
import styles from "./Menu.module.css"
import mulher from "../Imagens/mulher_menu.png"
function Menu() {
    return (
        <div>
            <div className={styles.fundo}>
                <div className={styles.mulher}>

                </div>
                <div className={styles.texto}>
                    <h1>Longe do simples,<br /> perto do fácil</h1>
                </div>

                <div className={styles.button}>
                <p>Abra uma conta sommet</p>
                </div>
                <img src={mulher} alt="mulher sorrindo" />
            </div>
        </div>
    )
}

export default Menu
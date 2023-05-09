import styles from "./Header.module.css"
import logo from "../Imagens/logo_white.png"
function Header(){
    return(
    <div>
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="logo sommet bank" />
            </div>
            <div className={styles.login}>
                <button>Login </button>
            </div>
            
        </div>
    </div>
    )
}

export default Header
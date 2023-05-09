import styles from "./Footer.module.css"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineFacebook} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import logo from "../Imagens/logo_whitee.png"

function Footer(){
    return(

        <div>
            <div className={styles.footer_fundo}>
                <img src={logo} alt="logo do footer" />
                <div className={styles.social}>
                <AiOutlineInstagram />
                <AiOutlineFacebook />
                <AiFillYoutube />
                </div>
            </div>
        </div>

    )
}

export default Footer
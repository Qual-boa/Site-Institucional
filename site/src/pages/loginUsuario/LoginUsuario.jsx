import styles from "./LoginUsuario.module.css";
import "../../global.css";
import imgPrincipal from "../../assets/ImgFundo.svg";
import { Link } from 'react-router-dom';
import { CardLogin } from "../../components/cardLogin/CardLogin";

function LoginUsuario(){
    return(
        <div className={styles["background-image"]}>
        <div className={styles["containerLoginUsuario"]}>
                <CardLogin />
            </div>
        </div>
    );
}
export default LoginUsuario;
import styles from "./LoginUsuario.module.css";
import "../../global.css";
import NavBar from "../../components/navbar/NavBar";
import logo from "../../assets/logo.svg";
import { CardLogin } from "../../components/cardLogin/CardLogin";

function LoginUsuario(){
    return(
        <>
        <NavBar logoInicio = {logo}/>
            <div className={styles["background-image"]}>
                    <div className={styles["containerLoginUsuario"]}>
                <CardLogin />
                </div>
            </div>
        </>
    );
}
export default LoginUsuario;
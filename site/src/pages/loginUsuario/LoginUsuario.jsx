import styles from "./LoginUsuario.module.css";
import "../../global.css";
import { CardLogin } from "../../components/cardLogin/CardLogin";
import NavBar from "../../components/navbar/NavBar";
import logo from "../../assets/QualABoa.svg";

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
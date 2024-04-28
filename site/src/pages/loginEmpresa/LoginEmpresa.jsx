import styles from "./LoginEmpresa.module.css";
import "../../global.css";
import NavBar from "../../components/navbar/NavBar";
import logo from "../../assets/logo.svg";
import { CardLoginEmpresa } from "../../components/cardLoginEmpresa/CardLoginEmpresa";

function LoginEmpresa(){
    return(
        <>
        <NavBar logoInicio = {logo}/>
            <div className={styles["background-image"]}>
                    <div className={styles["containerLoginEmpresa"]}>
                <CardLoginEmpresa />
                </div>
            </div>
        </>
    );
}
export default LoginEmpresa;
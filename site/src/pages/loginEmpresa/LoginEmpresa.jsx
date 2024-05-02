import styles from "./LoginEmpresa.module.css";
import "../../global.css";
import NavbarEmpresa from "../../components/navbarEmpresa/NavbarEmpresa";
import logo from "../../assets/QualABoa.svg";
import { CardLoginEmpresa } from "../../components/cardLoginEmpresa/CardLoginEmpresa";

function LoginEmpresa(){
    return(
        <>
        <NavbarEmpresa logoInicio = {logo}/>
            <div className={styles["background-image"]}>
                    <div className={styles["containerLoginEmpresa"]}>
                <CardLoginEmpresa />
                </div>
            </div>
        </>
    );
}
export default LoginEmpresa;
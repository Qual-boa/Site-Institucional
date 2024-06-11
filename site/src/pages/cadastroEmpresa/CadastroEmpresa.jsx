import styles from "./CadastroEmpresa.module.css";
import "../../global.css";
import NavbarEmpresa from "../../components/navbarEmpresa/NavbarEmpresa";
import logo from "../../assets/QualABoa.svg";
import { CardLoginEmpresa } from "../../components/cardCadastroEmpresa/CardCadastroEmpresa";
import FooterEmpresa from "../../components/footerEmpresa/FooterEmpresa";
import axios from "axios";

function LoginEmpresa(){
    
    return(
        <>
        <NavbarEmpresa logoInicio = {logo}/>
            <div className={styles["background-image"]}>
                    <div className={styles["containerCadastroEmpresa"]}>
                <CardLoginEmpresa />
                </div>
            </div>
        <FooterEmpresa/>    
        </>
    );
}
export default LoginEmpresa;
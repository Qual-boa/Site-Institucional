import styles from "./Listagem.module.css";
import "../../global.css";
import NavbarEmpresa from "../../components/navbarEmpresa/NavbarEmpresa";
import logo from "../../assets/QualABoa.svg";
import ResultadoBusca  from "../../components/resultadoBusca/ResultadoBusca";
import FooterEmpresa from "../../components/footerEmpresa/FooterEmpresa";

function Listagem(){
    return(
        <>
        <NavbarEmpresa logoInicio = {logo}/>
            <div className={styles["background-image"]}>
                    <div className={styles["containerBusca"]}>
                <ResultadoBusca/>
                </div>
            </div>
        <FooterEmpresa/>    
        </>
    );
}
export default Listagem;
import styles from "./Listagem.module.css";
import "../../global.css";
import NavbarEmpresa from "../../components/navbarEmpresa/NavbarEmpresa";
import logo from "../../assets/QualABoa.svg";
import ResultadoBusca  from "../../components/resultadoBusca/ResultadoBusca";
import FooterEmpresa from "../../components/footerEmpresa/FooterEmpresa";
import { useLocation } from "react-router-dom";

function Listagem(props){
    const location = useLocation();
    console.log(location)
    return(
        <>
        <NavbarEmpresa logoInicio = {logo}/>
            <div className={styles["background-image"]}>
                    <div className={styles["containerBusca"]}>
                        <div>
                        </div>
                <ResultadoBusca/>
                </div>
            </div>
        <FooterEmpresa/>    
        </>
    );
}
export default Listagem;
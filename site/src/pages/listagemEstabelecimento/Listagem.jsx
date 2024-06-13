import styles from "./Listagem.module.css";
import "../../global.css";
import NavbarEmpresa from "../../components/navbarEmpresa/NavbarEmpresa";
import logo from "../../assets/logoBranca.svg";
import ResultadoBusca  from "../../components/resultadoBusca/ResultadoBusca";
import Navbar from '../../components/navbar/NavBar'
import Footer from "../../components/footer/Footer";

function Listagem(){

    return(
        <>
        <Navbar logoInicio = {logo}/>
            <div className={styles["background-image"]}>
                    <div className={styles["containerBusca"]}>
                <ResultadoBusca/>
                </div>
            </div>
        <Footer/>    
        </>
    );
}
export default Listagem;
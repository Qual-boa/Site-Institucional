import styles from "./Listagem.module.css";
import "../../global.css";
import logo from "../../assets/QualABoa.svg";
import ResultadoBusca  from "../../components/resultadoBusca/ResultadoBusca";
import Navbar from '../../components/navbar/NavBar'
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";


function Listagem(props){
    const location = useLocation();
    console.log(location)
    return(
        <>
        <Navbar logoInicio = {logo}/>
            <div className={styles["background-image"]}>
                    <div className={styles["containerBusca"]}>
                        <div>
                        </div>
                <ResultadoBusca/>
                </div>
            </div>
        <Footer/>    
        </>
    );
}
export default Listagem;
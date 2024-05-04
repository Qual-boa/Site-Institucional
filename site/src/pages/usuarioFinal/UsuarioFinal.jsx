import styles from "./UsuarioFinal.module.css";
import "../../global.css";
import { CardLogin } from "../../components/cardLogin/CardLogin";
import NavBar from "../../components/navbar/NavBar";
import logo from "../../assets/QualABoa.svg";
import Footer from "../../components/footer/Footer";

function UsuarioFinal(){
    return(
        <>
        <NavBar logoInicio = {logo}/>
            <div className={styles["container"]}>
                <div className={styles["background-image"]}>
                     
                </div> 
            </div> 
        <Footer />       
        </>
    );
}
export default UsuarioFinal;
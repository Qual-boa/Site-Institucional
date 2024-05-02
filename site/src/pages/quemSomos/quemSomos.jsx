import styles from "./quemSomos.module.css";
import "../../global.css";
import { CardLogin } from "../../components/cardLogin/CardLogin";
import NavBar from "../../components/navbar/NavBar";
import logo from "../../assets/QualABoa.svg";
import Footer from "../../components/footer/Footer";


function QuemSomos(){
    return(
        <>
        <NavBar logoInicio = {logo}/>
            <div className={styles["container"]}>
                <div className={styles["background-image"]}>
                        <div className={styles["containerLoginUsuario"]}>
                    <CardLogin />
                    </div> 
                </div> 
            </div> 
        <Footer />       
        </>
    );
}
export default QuemSomos;
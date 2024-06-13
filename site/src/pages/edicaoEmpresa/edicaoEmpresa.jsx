import "../../global.css";
import styles from "./edicaoEmpresa.module.css";
import NavBarQS from "../quemSomos/NavBarQS/navBarQS";
import logoQS from "../../assets/logoBranca.svg";
import Footer from "../../components/footer/Footer";
import Editar from '../../components/form/form';

function EdicaoEmpresa(){
    return(
      <>
       <div className={styles.container}>
                <NavBarQS logoQS={logoQS} />
                <div className={styles["background-image"]}>
                    <Editar />                    
                </div>
                <Footer />
        </div>
        </>
    )
}



export default EdicaoEmpresa;
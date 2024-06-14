import "../../global.css";
import styles from "./edicaoEmpresa.module.css";
import NavBarQS from "../quemSomos/NavBarQS/navBarQS";
import logoQS from "../../assets/logoBranca.svg";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router";
import Cadastrar from "../../components/form/form";

function CadastrarInformacoesEmpresa(){
    const { id } = useParams();
    return(
      <>
       <div className={styles.container}>
                <NavBarQS logoQS={logoQS} />
                    <div className={styles["background-image"]}>
                        <Cadastrar idEmpresa={id} />                    
                    </div>
                <Footer />
        </div>
        </>
    )
}



export default CadastrarInformacoesEmpresa;
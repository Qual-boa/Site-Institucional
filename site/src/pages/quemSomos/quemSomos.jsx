import styles from "./quemSomos.module.css";
import "../../global.css";
import NavBarQS from "./NavBarQS/navBarQS";
import logoQS from "../../assets/logoBranca.svg";
import Footer from "../../components/footer/Footer";
import { Helmet } from 'react-helmet';
import Carlos from "../../assets/Carlinhos.svg"
import Danielle from "../../assets/Dani.svg"
import Nicolas from "../../assets/Nicolas.svg"
import Pedro from "../../assets/Pedro.svg"
import Samuel from "../../assets/Samuca.svg"
import Vinicius from "../../assets/Vinicius.svg"

function QuemSomos(){
    return(
        <>
        <Helmet>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Modak&display=swap" />
            </Helmet>
        <NavBarQS logoQS = {logoQS} />
            <div className={styles["container"]}>
                <div className={styles["background-imageQuemSomos"]}>
                        <div className={styles["containerQS"]}>
                        <span className={styles["titulo"]}>QUEM SOMOS?</span>
                        <span className={styles["texto"]}>Nos somos a empresa QUAL A BOA?, do ramo de tecnologia e formada por seis desenvolvedores e analistas responsáveis pela criação, idealização e desenvolvimento do  <span className={styles["modak-words"]}>Qual a boa?</span>, projeto que leva o nome da empresa.</span>
                        <span className={styles["conheca"]}>CONHEÇA NOSSOS INTEGRANTES!</span>
                        <div className={styles["avatares"]}><img src={Carlos} alt="avatar Carlos" /><img src={Danielle} alt="avatar Danielle" /><img src={Nicolas} alt="avatar Nicolas" /></div>
                        <div className={styles["avatares-nomes"]}><span className={styles["nomes"]}>CARLOS BENECKE</span><span className={styles["nomes"]}>DANIELLE ROMANO</span><span className={styles["nomes"]}>NICOLES PRATES&nbsp;&nbsp;</span></div>
                        <div className={styles["avatares"]}><img src={Pedro} alt="avatar Pedro" /><img src={Samuel} alt="avatar Samuel" /><img src={Vinicius} alt="avatar Vinicius" /></div>
                        <div className={styles["avatares-nomes"]}><span className={styles["nomes"]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PEDRO PRADO</span><span className={styles["nomes"]}>SAMUEL LUCENA</span><span className={styles["nomes"]}>VINICIUS COSTA&nbsp;&nbsp;&nbsp;</span></div>
                    </div> 
                </div> 
            </div> 
        <Footer />       
        </>
    );
}
export default QuemSomos;
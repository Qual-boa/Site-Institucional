import "../../global.css";
import NavBar from "../../components/navbar/NavBar";
import logo from "../../assets/QualABoa.svg";
import Footer from "../../components/footer/Footer";
import cervejinha from "../../assets/cervejinha.png";
import iconeLocal from "../../assets/local-icon.svg";
import styles from "../dono/DonoDeslogado";

function UsuarioFinal(){
    return(
        <>
        <NavBar logoInicio = {logo}/>
        <div className={styles["container"]}>
                <div className={styles["pesquisa"]}>
                    <div className={styles["pesquisa-titulo"]}>Qual a Boa <span className={styles["pesquisa-interrogacao"]}>?</span></div>
                    <div className={styles["pesquisa-cervejinha"]}>
                        <span className={styles["bold"]}>PESQUISE NO NOSSO SITE E ENCONTRE PELO SEU ROLÊ IDEAL</span>
                        <img src={cervejinha} alt="Cervejinha" className={styles["cervejinha"]} />
                    </div>
                    <div className={styles["pesquisa-configure"]}>
                        <img src={iconeLocal} alt="Ícone Local" />
                        <span>Configure seu endereço para começar</span>
                    </div>
                    <form action="#" className={styles["pesquisa-form"]}>
                        <input type="search" name="endereco" id="endereco" placeholder="Escreva seu endereço" className={styles["pesquisa-input"]}/>
                        <button type="submit" className={styles["pesquisa-button"]}>Pesquisar</button>
                    </form>
                </div>
            </div>
        <Footer />       
        </>
    );
}
export default UsuarioFinal;
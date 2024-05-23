import NavBar from "../../components/navbar/NavBar";
import styles from "./DonoDeslogado.module.css";
import cervejinha from "../../assets/breja-removebg-preview.png";
import iconeLocal from "../../assets/local-icon.svg"
import logo from "../../assets/QualABoa.svg";
import Footer from "../../components/footerEmpresa/FooterEmpresa";

function Dono() {
    return (
        <>
            <NavBar logoInicio={logo}/>
            <div className={styles["container-fullpage"]}>
                <div className={styles["container"]}>
                    <div className={styles["pesquisa"]}>
                        <div className={styles["container-inicial"]}>
                            <div className={styles["pesquisa-titulo"]}>QUAL A BOA </div>
                            <div className={styles["pesquisa-interrogacao"]}>?</div>
                            <span className={styles["subtitulo"]}>CADASTRE SEU ESTABELECIMENTO</span>
                        </div>
                        <img src={cervejinha} alt="Cervejinha" className={styles["cervejinha"]} />
                    </div>
                    <div className={styles["container-input"]}>
                        <input className={styles["input-principal"]} type="text" placeholder="Insira o e-mail da sua empresa"/>
                        <button className={styles["botao-principal"]} type="cadastrar">CADASTRAR</button>
                    </div>
                </div>
                <div className={styles["display-logos"]}>
                    <div className={styles["logos"]}></div>
                    <div className={styles["logos"]}></div>
                    <div className={styles["logos"]}></div>
                    <div className={styles["logos"]}></div>
                    <div className={styles["logos"]}></div>
                    <div className={styles["logos"]}></div>
                </div>
                <div className={styles["vantagens"]}>
                    <div className={styles["linha"]}></div>
                    <h1>VANTAGENS</h1>
                    <div className={styles["vantagens-containers"]}>
                        <div className={styles["vantagens-box"]}>caixa1</div>
                        <div className={styles["vantagens-box"]}>caixa2</div>
                        <div className={styles["vantagens-box"]}>caixa3</div>
                    </div>
                </div>
                <div className={styles["destaques"]}>
                    <div className={styles["linha"]}></div>
                    <h1>BARES CADASTRADOS DESTAQUES DO MÊS</h1>
                    <div className={styles["destaques-containers"]}>
                        <div className={styles["destaques-box"]}>caixa1 CARROSEL</div>
                    </div>
                </div>
                <div className={styles["dica"]}>
                    <div className={styles["linha"]}></div>
                    <h1>DICA DO CHOPPER</h1>
                    <div className={styles["dica-containers"]}>
                        <div className={styles["dica-box"]}>caixa1</div>
                    </div>
                </div>
            </div>
            <Footer/>
                    {/* <div className={styles["pesquisa-configure"]}>
                        <img src={iconeLocal} alt="Ícone Local" />
                        <span>Configure seu endereço para começar</span>
                    </div>
                    <form action="#" className={styles["pesquisa-form"]}>
                        <input type="search" name="endereco" id="endereco" placeholder="Escreva seu endereço" className={styles["pesquisa-input"]}/>
                        <button type="submit" className={styles["pesquisa-button"]}>Pesquisar</button>
                    </form> */}
        </>
    );
}

export default Dono;
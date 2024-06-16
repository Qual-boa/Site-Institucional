import NavBar from "../../components/navbarEmpresa/NavbarEmpresa";
import styles from "./DonoDeslogado.module.css";
import cervejinha from "../../assets/breja-removebg-preview.png";
import logo from "../../assets/logoBranca.svg";
import Footer from "../../components/footerEmpresa/FooterEmpresa";
import FacilidadeImg from "../../assets/facilidadeImg.svg"
import IdadentidadeIMG from "../../assets/identidadeImg.svg"
import DashImg from "../../assets/dashImg.svg"
import Beer4uDestaque from "../../assets/beer4uDestaques.jpeg"
import ChopperDanca from "../../assets/Crop_chopper2.svg"
import RetanguloDica from "../../assets/retanguloDica.svg"
import { useNavigate } from "react-router-dom";

function Dono() {
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        // Navega para a página inicial (ou para a página onde está a seção desejada)
        navigate('/cadastroEmpresa');

        // Espera um pequeno intervalo de tempo antes de rolar para a seção
        setTimeout(() => {
            var secao = document.getElementById(sectionId);
            if (secao) {
                secao.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // ajuste o tempo conforme necessário
    };

    const listagemScroll = (sectionId) => {
        // Navega para a página inicial (ou para a página onde está a seção desejada)
        navigate('/listagem');

        // Espera um pequeno intervalo de tempo antes de rolar para a seção
        setTimeout(() => {
            var secao = document.getElementById(sectionId);
            if (secao) {
                secao.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // ajuste o tempo conforme necessário
    };
    

    return (
        <>
            <NavBar logoInicio={logo}/>
            <div className={styles["container-fullpage"]}>
                <section className={styles["sessao"]} id="inicio">
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
                            <button type="button" scrollToSection={'inicio'} className={styles["botao-principal"]}>PESQUISAR</button>
                        </div>
                    </div>
                </section>
                <section className={styles["sessao"]} id="vantagens">
                    <div className={styles["vantagens"]} id="vantagens">
                        <div className={styles["linha"]}></div>
                        <h1>VANTAGENS</h1>
                        <div className={styles["vantagens-containers"]}>
                            <div className={styles["vantagens-box"]}>
                                <img src={FacilidadeImg} alt="Imagem relacionada a facilidade" className={styles["vantagemImg"]}/>
                                <h3>FACILIDADE</h3>
                                <span>
                                    Com a nossa aplicação, você possui mais facilidade ao divulgar seu estabelecimento
                                </span>
                            </div>
                            <div className={styles["vantagens-box"]}>
                                <img src={IdadentidadeIMG} alt="Imagem relacionada a facilidade" className={styles["vantagemImg"]}/>
                                <h3>IDENTIDADE</h3>
                                <span>
                                    Adicione novas atrações, adapte seu cardapio e perfil e deixe seu estabelecimento com a sua cara
                                </span>
                            </div>
                            <div className={styles["vantagens-box"]}>
                                <img src={DashImg} alt="Imagem relacionada a facilidade" className={styles["vantagemImg"]}/>
                                <h3>DASHBOARD</h3>
                                <span>
                                    Insights que te ajudarão no monitoramento de visistas e atividades dos acessos a sua página
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles["sessao"]} id="destaque">
                    <div className={styles["destaques"]}>
                        <div className={styles["linha"]}></div>
                        <h1>BAR DESTAQUES DO MÊS</h1>
                        <div className={styles["destaques-containers"]}>
                            <div className={styles["destaques-box"]}>
                                <img src={Beer4uDestaque} alt="Bar destaque nesse mês"/>
                                <div className={styles["destaques-txt"]}>
                                    <h2>BEER4U</h2>
                                    <span>
                                        O Beer4U possui atrações diárias e um menu novo por dia.
                                        É especialista em cervejas artesanais e possui uma novidade diária.
                                        Ideal para você que gosta de degustar e apreciar novos sabpres. 
                                    </span>
                                    <button className={styles["botao-visita"]} onClick={() => listagemScroll("inicio")} type="button">VISITAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles["sessao"]} id="dica">
                    <div className={styles["dica"]}>
                        <div className={styles["linha"]}></div>
                        <h1>DICA DO CHOPPER</h1>
                        <div className={styles["dica-containers"]}>
                            <span className={styles["primeira-dica"]}>SE CADASTRE E SE TORNE TAMBÉM UM DESTAQUE,
                                 AUMENTANDO A <br></br> VISIBILIDADE DO SEU ESTABELECIMENTO RECEBENDO AINDA MAIS CLIENTES
                            </span>
                            <span className={styles["segunda-dica"]}>
                                Não fique fora dessa, venha fazer parte do<img src={logo} alt="Logo"/>
                            </span>
                            <img src={RetanguloDica} className={styles["retangulo-dica"]} alt="retangulo do fundo" />
                            <img src={ChopperDanca} className={styles["chopper-dica"]} alt="Chopper" />
                            <button className={styles["botao-dica"]} type="cadastrar" to="outra-pagina" smooth={true} onClick={() => scrollToSection('inicio')}>CADASTRAR</button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default Dono;
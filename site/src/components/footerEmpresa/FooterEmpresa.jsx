import styles from "./FooterEmpresa.module.css";
import LogoFooter from '../../assets/footerIcon.svg'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import LogoFooter2024 from "../../assets/footer2024.svg"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    const quemSomosSection = (sectionId) => {
        // Navega para a página inicial (ou para a página onde está a seção desejada)
        navigate('/quem-somos');

        // Espera um pequeno intervalo de tempo antes de rolar para a seção
        setTimeout(() => {
            var secao = document.getElementById(sectionId);
            if (secao) {
                secao.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // ajuste o tempo conforme necessário
    };

    const scrollToSection = (sectionId) => {
        // Navega para a página inicial (ou para a página onde está a seção desejada)
        navigate('/home-estabelecimento');

        // Espera um pequeno intervalo de tempo antes de rolar para a seção
        setTimeout(() => {
            var secao = document.getElementById(sectionId);
            if (secao) {
                secao.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // ajuste o tempo conforme necessário
    };

    return (
        <section id="footerEmpresa">
        <footer className={styles.footer}>
            <div className={styles.logoContainer}>
                <img src={LogoFooter} alt="logo" className={styles.logo} style={{ margin: '13px' }}/>
                <img src={LogoFooter} alt="logo" className={styles.logo} />
                <img src={LogoFooter} alt="logo" className={styles.logo} />
                <img src={LogoFooter} alt="logo" className={styles.logo} />
                <img src={LogoFooter} alt="logo" className={styles.logo} />
                <img src={LogoFooter} alt="logo" className={styles.logo} />

            </div>
            <div className={styles.menuContainer}>
                <div className={styles.menu}>
                    <h3 className={styles.menuTitulo}>MENU</h3>
                    <Link to={"/quem-somos"}>QUAL A BOA?</Link>
                    <Link to={"/quem-somos"}>MELHORES DO MÊS</Link>
                    <Link to={"/quem-somos"}>QUAL A SUA BOA?</Link>
                    <Link to={"/quem-somos"}>CONTATOS</Link>                    
                    <Link to={"/quem-somos"}>QUEM SOMOS</Link>
                </div>
                <div className={styles.menu}>
                    <h3 className={styles.menuTitulo}>ENDEREÇO</h3>
                    <span className={styles.optionsEndereco}>Rua Haddock Lobo, 595</span>
                    <span className={styles.optionsEndereco}>Cerqueira César</span>
                    <span className={styles.optionsEndereco}>São Paulo - SP</span>
                    <span className={styles.optionsEndereco}>01414-00</span>
                </div>
                <div className={styles.menu}>
                    <h3 className={styles.menuTitulo}>CONTATOS</h3>
                    <span className={styles.options}>@QualABoa</span>
                    <FaFacebook className={styles.midias}/>
                    <FaInstagram className={styles.midias}/>
                    <FaLinkedin className={styles.midias}/>
                </div>
            </div>
            <div className={"footer_copyright_container"} >
                <div className={styles.copyright}>
                    <img src={LogoFooter2024} alt="Qual a Boa 2024" className={styles.logo}/>
                    <span>Todos os direitos reservados</span>
                </div>
            </div>
        </footer>
        </section>
        )
}
export default Footer
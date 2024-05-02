import styles from "./Footer.module.css";
import LogoFooter from '../../assets/footerIcon.svg'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import LogoFooter2024 from "../../assets/footer2024.svg"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoContainer}>
                <img src={LogoFooter} alt="logo" className={styles.logo} style={{ margin: '13px' }}/>
                <img src={LogoFooter} alt="logo" className={styles.logo} />
                <img src={LogoFooter} alt="logo" className={styles.logo} />
                <img src={LogoFooter} alt="logo" className={styles.logo} />
                <img src={LogoFooter} alt="logo" className={styles.logo} />
            </div>
            <div className={styles.menuContainer}>
                <div className={styles.menu}>
                    <h3 className={styles.menuTitulo}>MENU</h3>
                    <a className={styles.options} onClick={""}>QUAL A BOA?</a>
                    <a className={styles.options} onClick={""}>MELHORES DO MÊS</a>
                    <a className={styles.options} onClick={""}>QUAL A SUA BOA?</a>
                    <a className={styles.options} onClick={""}>QUEM SOMOS</a>
                    <a className={styles.options} onClick={""}>CONTATOS</a>                    
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
        </footer>)
}
export default Footer
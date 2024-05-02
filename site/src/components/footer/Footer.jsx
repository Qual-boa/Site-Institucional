import styles from "./Footer.module.css";
import LogoFooter from '../../assets/footerIcon.svg'

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
                <div className={styles.menu}><span>MENU</span>

                </div>
                <div className={styles.menu}><span>ENDEREÇO</span>

                </div>
                <div className={styles.menu}><span>CONTATO</span>
                
                </div>
            </div>
        </footer>)
}
export default Footer
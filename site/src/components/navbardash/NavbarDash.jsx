import styles from './NavbarDash.module.css';
import perfil from '../../assets/perfilUser.svg';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ logoInicio }) => {
    function logOff() {
        sessionStorage.removeItem("qabToken");
    }

    const navigate = useNavigate();
    return (
        <nav className={styles["navbar"]}>
            <img src={logoInicio} className={styles["logo-inicio"]} alt="Logo Início" />
            <span><b>VANTAGENS</b></span>
            <span><b>DESTAQUES DO MÊS</b></span>
            <span><b>CONTATOS</b></span>
            <span><b>QUEM SOMOS</b></span>
            <span onClick={() => navigate("/quem-somos")}><b>QUEM SOMOS</b></span>
            <input type="text" placeholder="Escreva aqui"/>
            <div onClick={logOff}><img src={perfil} className={styles["perfil-user"]} alt="Usuário"/></div>
        </nav>
    );
};

export default NavBar;

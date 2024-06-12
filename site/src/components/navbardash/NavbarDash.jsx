import React, { useState } from 'react';
import styles from './NavbarDash.module.css';
import perfil from '../../assets/perfilUser.svg';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ logoInicio }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    function logOff() {
        sessionStorage.removeItem("qabToken");
        navigate("/login"); 
    }

    return (
        <nav className={styles["navbar"]}>
            <img src={logoInicio} className={styles["logo-inicio"]} alt="Logo Início" onClick={() => navigate("/")}/>
            <span onClick={() => navigate("/")}><b>VANTAGENS</b></span>
            <span onClick={() => navigate("/quem-somos")}><b>DESTAQUES DO MÊS</b></span>
            <span onClick={() => navigate("#footer")}><b>CONTATOS</b></span>
            <span onClick={() => navigate("/quem-somos")}><b>QUEM SOMOS</b></span>
            <input type="text" placeholder="Escreva aqui"/>
            <div className={styles["perfil-container"]} onClick={() => setMenuOpen(!menuOpen)}>
                <img src={perfil} className={styles["perfil-user"]} alt="Usuário"/>
                {menuOpen && (
                    <div className={styles["dropdown-menu"]}>
                        <ul>
                            <li onClick={() => navigate("/dashboard")}>Dashboard</li>
                            <li onClick={logOff}>Sair</li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;


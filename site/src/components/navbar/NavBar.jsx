import React from 'react';
import styles from './NavBar.module.css';
import perfil from '../../assets/perfilUser.svg';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ logoInicio }) => {
    const navigate = useNavigate();
    return (
        <nav className={styles["navbar"]}>
            <img src={logoInicio} className={styles["logo-inicio"]} alt="Logo Início" />
            <span><b>MELHORES DO MÊS</b></span>
            <span><b>QUAL A SUA BOA?</b></span>
            <span><b>CONTATOS</b></span>
            <span onClick={() => navigate("/quem-somos")}><b>QUEM SOMOS</b></span>
            <input type="text" placeholder="Escreva aqui"/>
            <img src={perfil} className={styles["perfil-user"]} alt="Usuário" />
        </nav>
    );
};

export default NavBar;

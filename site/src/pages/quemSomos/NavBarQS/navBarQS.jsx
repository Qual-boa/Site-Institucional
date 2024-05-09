import React from 'react';
import styles from './navBarQS.module.css';
import perfil from '../../../assets/perfilBranco.svg';
import { useNavigate } from 'react-router-dom';

const NavBarQS = ({ logoQS }) => {
    const navigate = useNavigate();
    return (
        <nav className={styles["navbarQS"]}>
            <img src={logoQS} className={styles["logoQS"]} alt="Logo Início" />
            <span><b>MELHORES DO MÊS</b></span>
            <span><b>VANTAGENS</b></span>
            <span><b>CONTATOS</b></span>
            <span onClick={() => navigate("/quem-somos")}><b>QUEM SOMOS</b></span>
            <input type="text" placeholder="Escreva aqui"/>
            <img src={perfil} className={styles["perfil-userQS"]} alt="Usuário" />
        </nav>
    );
};

export default NavBarQS;

import React from 'react';
import styles from './navBarQS.module.css';
import perfil from '../../../assets/perfilBranco.svg';
import { useNavigate } from 'react-router-dom';

const NavBarQS = ({ logoQS }) => {
    const navigate = useNavigate();
    function logOff() {
        sessionStorage.removeItem("qabToken");
        navigate("/login")
    }

    const quemSomosSection = (sectionId) => {
        navigate('/quem-somos');

        setTimeout(() => {
            var secao = document.getElementById(sectionId);
            if (secao) {
                secao.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); 
    };

    const scrollToSection = (sectionId) => {
        navigate('/home');

        setTimeout(() => {
            var secao = document.getElementById(sectionId);
            if (secao) {
                secao.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <nav className={styles["navbarQS"]}>
            <img src={logoQS} className={styles["logo-inicio"]} alt="Logo Início" to="outra-pagina" smooth={true} onClick={() => scrollToSection('inicio')} />
            <span to="outra-pagina" smooth={true} onClick={() => scrollToSection('cidades')}><b>CIDADES MAIS PROCURADAS</b></span>
            <span to="outra-pagina" smooth={true} onClick={() => scrollToSection('bares')}><b>BARES MAIS VISTOS</b></span>
            <span to="outra-pagina" smooth={true} onClick={() => scrollToSection('sugestoes')}><b>SUGESTÕES DO MÊS</b></span>
            <span to="outra-pagina" smooth={true} onClick={() => scrollToSection('boa')}><b>QUAL A SUA BOA?</b></span>
            <span to="outra-pagina" smooth={true} onClick={() => quemSomosSection('quem-somos')}><b>QUEM SOMOS</b></span>
            <input type="text" placeholder="Escreva aqui"/>
            <img onClick={logOff} src={perfil} className={styles["perfil-userQS"]} alt="Usuário" />
        </nav>
    );
};

export default NavBarQS;

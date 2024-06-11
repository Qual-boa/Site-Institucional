import React from 'react';
import styles from './NavbarEmpresa.module.css';
import perfil from '../../assets/perfilUser.svg';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ logoInicio }) => {
    const navigate = useNavigate();

    {/*const quemSomosSection = () =>{
        navigate('/quemSomos');
    }*/}

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
        <nav className={styles["navbar"]}>
            <img src={logoInicio} className={styles["logo-inicio"]} alt="Logo Início" />
            <span to="outra-pagina" smooth={true} onClick={() => scrollToSection('vantagens')}><b>VANTAGENS</b></span>
            <span to="outra-pagina" smooth={true} onClick={() => scrollToSection('destaque')}><b>BAR DESTAQUE DO MÊS</b></span>
            <span to="outra-pagina" smooth={true} onClick={() => scrollToSection('dica')}><b>DICA DO CHOPPER</b></span>
            <span><b>QUEM SOMOS</b></span>
            <input type="text" placeholder="Escreva aqui"/>
            <img src={perfil} className={styles["perfil-user"]} alt="Usuário" />
        </nav>
    );
};

export default NavBar;

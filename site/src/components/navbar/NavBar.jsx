import React, { useCallback } from 'react';
import styles from './NavBar.module.css';
import perfil from '../../assets/perfilUser.svg';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../searchBar/SearchBar'; // Importe o componente SearchBar

const NavBar = ({ logoInicio }) => {
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
        navigate('/home');

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
            <img src={logoInicio} className={styles["logo-inicio"]} alt="Logo Início" to="outra-pagina" smooth={true} onClick={() => scrollToSection('inicio')} />
            <span to="outra-pagina" smooth={true} onClick={() => scrollToSection('cidades')}><b>CIDADES MAIS PROCURADAS</b></span>
            <span to="outra-pagina" smooth={true} onClick={() => scrollToSection('bares')}><b>BARES MAIS VISTOS</b></span>
            <span to="outra-pagina" smooth={true} onClick={() => scrollToSection('sugestoes')}><b>SUGESTÔES DO MÊS</b></span>
            <span to="outra-pagina" smooth={true} onClick={() => scrollToSection('boa')}><b>QUAL A SUA BOA?</b></span>
            <span to="outra-pagina" smooth={true} onClick={() => quemSomosSection('quem-somos')}><b>QUEM SOMOS</b></span>
            <SearchBar /> {/* Use o componente SearchBar */}
            <img src={perfil} className={styles["perfil-user"]} alt="Usuário" />
        </nav>        
    );
};

export default NavBar;

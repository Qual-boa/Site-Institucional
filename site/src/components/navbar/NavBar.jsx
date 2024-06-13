import React, { useState } from 'react';
import styles from './NavBar.module.css';
import perfil from '../../assets/perfilUser.svg';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar'; // Importe o componente SearchBar

const NavBar = ({ logoInicio }) => {
    const navigate = useNavigate();

    // Estado para controlar a visibilidade do menu drop-down
    const [menuOpen, setMenuOpen] = useState(false);

    // Função para alternar a visibilidade do menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Função para navegar para uma seção específica e fechar o menu
    const navigateAndCloseMenu = (sectionId) => {
        navigate(`/${sectionId}`);
        setMenuOpen(false);
    };

    return (
        <nav className={styles["navbar"]}>
            <img
                src={logoInicio}
                className={styles["logo-inicio"]}
                alt="Logo Início"
                onClick={() => navigate("/")}
            />
            <span onClick={() => navigateAndCloseMenu('cidades')}><b>CIDADES MAIS PROCURADAS</b></span>
            <span onClick={() => navigateAndCloseMenu('bares')}><b>BARES MAIS VISTOS</b></span>
            <span onClick={() => navigateAndCloseMenu('sugestoes')}><b>SUGESTÕES DO MÊS</b></span>
            <span onClick={() => navigateAndCloseMenu('boa')}><b>QUAL A SUA BOA?</b></span>
            <span onClick={() => navigateAndCloseMenu('quem-somos')}><b>QUEM SOMOS</b></span>
            <SearchBar /> {/* Componente SearchBar */}
            <div className={styles["perfil-container"]} onClick={toggleMenu}>
                <img src={perfil} className={styles["perfil-user"]} alt="Usuário" />
                {menuOpen && (
                    <div className={styles["dropdown-menu"]}>
                        <ul>
                            <li onClick={() => navigate("/dashboard")}>Meu Perfil</li>
                            <li>Configurações</li>
                            <li onClick={() => navigate("/login")}>Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;

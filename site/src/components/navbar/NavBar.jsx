import React, { useState } from 'react';
import styles from './NavBar.module.css';
import perfil from '../../assets/perfilUser.svg';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import Modal from '../modalGenerico/ModalGenerico';
import EditarUsuarios from '../../pages/formsDashboard/EditarUsuarios'; 
import EditarFinal from '../editarFinal/EditarFinal';

const NavBar = ({ logoInicio }) => {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
 
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const openModal = () => {
        setModalOpen(true);
        setMenuOpen(false);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

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
            <SearchBar /> 
            <div className={styles["perfil-container"]} onClick={toggleMenu}>
                <img src={perfil} className={styles["perfil-user"]} alt="Usuário" />
                {menuOpen && (
                    <div className={styles["dropdown-menu"]}>
                        <ul>
                            <li onClick={openModal}>Configurações</li>
                            <li onClick={() => navigate("/login")}>Logout</li>
                        </ul>
                    </div>
                )}
            </div>
            <Modal isOpen={modalOpen} onClose={closeModal}>
                <EditarFinal closeModal={closeModal} />
            </Modal>
        </nav>
    );
};

export default NavBar;

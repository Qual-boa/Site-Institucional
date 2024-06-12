import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import AdicionarUsuarios from '../../pages/formsDashboard/AdicionarUsuarios';
import EditarUsuarios from '../../pages/formsDashboard/EditarUsuarios';

const Sidebar = () => {
    const location = useLocation();
    const [modalContent, setModalContent] = useState(null);

    const handleUserOptionChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption) {
            setModalContent(selectedOption);
        }
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <div className={styles.sidebar}>
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard" className={location.pathname === '/dashboard' ? styles.active : ''}>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <select
                            onChange={handleUserOptionChange}
                            value={location.pathname.includes('/usuarios') ? location.pathname : ''}
                            className={location.pathname.includes('/usuarios') ? styles.active : ''}
                        >
                            <option value="" disabled>Usuários</option>
                            <option value="adicionar">Adicionar</option>
                            <option value="editar">Editar</option>
                        </select>
                    </li>
                    <li>
                        <Link to="/relatorios" className={location.pathname === '/relatorios' ? styles.active : ''}>
                            Relatórios
                        </Link>
                    </li>
                </ul>
            </nav>

            {modalContent && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal} aria-label="Fechar modal">X</button>
                        {modalContent === 'adicionar' && <AdicionarUsuarios closeModal={closeModal} />}
                        {modalContent === 'editar' && <EditarUsuarios closeModal={closeModal} />}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;

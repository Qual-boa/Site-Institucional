import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import AdicionarUsuarios from '../../pages/formsDashboard/AdicionarUsuarios';
import EditarUsuarios from '../../pages/formsDashboard/EditarUsuarios';
import api from '../../api';
import { saveAs } from 'file-saver';

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

    function downloadRelatorio() {
        const establishmentId = sessionStorage.getItem("establishmentId");
        api.get(`/access/file/${establishmentId}`, {
            responseType: 'blob', // Importante para obter o blob do arquivo
        })
        .then(response => {
            const blob = new Blob([response.data], { type: 'text/csv' });
            saveAs(blob, 'relatorio.csv');
        })
        .catch(error => {
            console.error('Erro ao baixar o relatório:', error);
        });
    }

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
                        <button onClick={() => downloadRelatorio()} className={styles.relatorioButton}>
                            Baixar Relatório
                        </button>
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

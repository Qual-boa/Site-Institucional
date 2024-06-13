import React from 'react';
import Navbar from '../../components/navbardash/NavbarDash';
import Overview from '../../components/overview/Overview';
import Sidebar from '../../components/sidebar/Sidebar';
import Charts from '../../components/charts/Charts';
import styles from './Dashboard.module.css';
import Footer from "../../components/footerEmpresa/FooterEmpresa";
import logo from "../../assets/logoBranca.svg";

const Dashboard = () => {
    // Função para formatar a data
    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('pt-BR', options);
    };

    // Obtém a data atual e a formata
    const today = new Date();
    const formattedDate = formatDate(today);

    return (
        <>
            <Navbar logoInicio={logo}/>
            <div className={styles["background-imageCadastro"]}>
                <div className={styles.dashboard}>
                    <Sidebar />
                    <div className={styles.main}>
                        <header className={styles.header}>
                            <span>{formattedDate}</span>
                        </header>
                        <Overview />
                        <Charts/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Dashboard;

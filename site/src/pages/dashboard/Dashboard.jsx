import React from 'react';
import Navbar from '../../components/navbar/NavBar';
import Overview from '../../components/overview/Overview';
import Sidebar from '../../components/sidebar/Sidebar';
import Charts from '../../components/charts/Charts';
import styles from './Dashboard.module.css';
import Footer from "../../components/footerEmpresa/FooterEmpresa";
import logo from "../../assets/logoBranca.svg";
const Dashboard = () => {
    return (
        <>
            <Navbar logoInicio={logo}/>
            <div className={styles["background-imageCadastro"]}>
                <div className={styles.dashboard}>
                    <Sidebar />
                    <div className={styles.main}>
                        <header className={styles.header}>
                            <span>10 de junho de 2024</span>
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

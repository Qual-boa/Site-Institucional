import React from 'react';
import styles from './Overview.module.css';

const Overview = () => {
    return (
        <>
        <span className={styles.nameOverview}><b>Bem Vindo, Matheus!</b></span>
        <div className={styles.overview}>
            <div className={styles.metric1}>
                <span><b>Média de Clicks por Mês</b></span><br></br>
                <span><b>10</b></span>
            </div>
            <div className={styles.metric2}>
                <span><b>Dia com mais Clicks</b></span>
                <br></br>
                <span><b>10</b></span>
            </div>
            <div className={styles.metric3}>
                <span><b>Horário com mais Clicks</b></span>
                <br></br>
                <span><b>10</b></span>
            </div>
            <div className={styles.metric4}>
                <span><b>Favoritado</b></span>
                <br></br>
                <span><b>10</b></span>
            </div>
        </div>
        </>
    );
}

export default Overview;

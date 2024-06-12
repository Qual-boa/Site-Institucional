import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './Overview.module.css';

const api = axios.create({
    baseURL: 'http://localhost:8080', 
});

api.interceptors.request.use(config => {
    const token = sessionStorage.getItem('jwtToken'); 
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

const Overview = () => {
    const [metrics, setMetrics] = useState({
        averageClicksPerMonth: 0,
        dayOfWeekWithMostClicks: '',
        findHourWithMostClicks: '',
        favoriteCount: 0
    });

    useEffect(() => {
        const fetchMetrics = async () => {
            const establishmentId = sessionStorage.getItem("empresaId");
            if (establishmentId) {
                try {
                    const response = await api.get(`/access/dashboard/${establishmentId}`);
                    const responseData = response.data;

                    const dayOfWeekWithMostClicks = responseData.dayOfWeekWithMostClicks.length > 0
                        ? Object.keys(responseData.dayOfWeekWithMostClicks[0])[0]
                        : 'N/A';

                    const findHourWithMostClicks = responseData.findHourWithMostClicks.length > 0
                        ? Object.keys(responseData.findHourWithMostClicks[0])[0]
                        : 'N/A';

                    setMetrics({
                        averageClicksPerMonth: responseData.averageClicksPerMonth,
                        dayOfWeekWithMostClicks: dayOfWeekWithMostClicks,
                        findHourWithMostClicks: findHourWithMostClicks,
                        favoriteCount: responseData.favoriteCount
                    });
                } catch (error) {
                    console.error("Erro ao obter dados do dashboard:", error);
                }
            }
        };

        fetchMetrics();
    }, []);

    return (
        <>
            <span className={styles.nameOverview}><b>Bem Vindo, Matheus!</b></span>
            <div className={styles.overview}>
                <div className={styles.metric1}>
                    <span><b>Quantidade de Clicks por Mês</b></span><br /> 
                    <span><b>{metrics.averageClicksPerMonth}</b></span>
                </div>
                <div className={styles.metric2}>
                    <span><b>Dia com mais Clicks</b></span><br />
                    <span><b>{metrics.dayOfWeekWithMostClicks}</b></span>
                </div>
                <div className={styles.metric3}>
                    <span><b>Horário com mais Clicks</b></span><br />
                    <span><b>{metrics.findHourWithMostClicks}</b></span>
                </div>
                <div className={styles.metric4}>
                    <span><b>Favoritado</b></span><br />
                    <span><b>{metrics.favoriteCount}</b></span>
                </div>
            </div>
        </>
    );
}

export default Overview;

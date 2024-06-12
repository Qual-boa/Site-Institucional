import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

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

const Charts = () => {
    const [dailyVisitsData, setDailyVisitsData] = useState(null);
    const [interestOverTimeData, setInterestOverTimeData] = useState(null);

    useEffect(() => {
        const establishmentId = sessionStorage.getItem("empresaId");
        if (establishmentId) {
            api.get(`/access/dashboard/${establishmentId}`)
                .then(response => {
                    const responseData = response.data;

                    const dailyVisits = {
                        labels: responseData.clicksPerDayLast30Days.map(item => item.date), // Supondo que o objeto tem uma propriedade `date`
                        datasets: [
                            {
                                label: 'Visitas Diárias',
                                data: responseData.clicksPerDayLast30Days.map(item => item.clicks), // Supondo que o objeto tem uma propriedade `clicks`
                                fill: false,
                                backgroundColor: 'rgba(75,192,192,0.4)',
                                borderColor: 'rgba(75,192,192,1)'
                            }
                        ]
                    };
                    setDailyVisitsData(dailyVisits);

                    const interestOverTime = {
                        labels: responseData.categoriesSearches.map(item => item.name), // Supondo que o objeto tem uma propriedade `name`
                        datasets: [
                            {
                                label: 'Interesse ao Longo do Tempo',
                                data: responseData.categoriesSearches.map(item => item.searchesCount), // Supondo que o objeto tem uma propriedade `searchesCount`
                                backgroundColor: 'rgba(153,102,255,0.6)',
                                borderColor: 'rgba(153,102,255,1)',
                                borderWidth: 1
                            }
                        ]
                    };
                    setInterestOverTimeData(interestOverTime);
                })
                .catch(error => {
                    console.error("Erro ao obter dados do dashboard:", error);
                });
        }
    }, []);

    const dailyVisitsOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Visitas Diárias',
            },
        },
    };

    const interestOverTimeOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Interesse ao Longo do Tempo',
            },
        },
    };

    return (
        <div className={styles.charts}>
            {dailyVisitsData && (
                <div className={styles.chart}>
                    <h2>Visitas Diárias</h2>
                    <Line data={dailyVisitsData} options={dailyVisitsOptions} />
                </div>
            )}
            {interestOverTimeData && (
                <div className={styles.chart}>
                    <h2>Interesse ao Longo do Tempo</h2>
                    <Bar data={interestOverTimeData} options={interestOverTimeOptions} />
                </div>
            )}
        </div>
    );
}

export default Charts;

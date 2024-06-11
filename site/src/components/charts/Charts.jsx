import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import styles from './Charts.module.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import api from '../../api';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Charts = () => {
    const [dailyVisitsData, setDailyVisitsData] = useState(null);
    const [interestOverTimeData, setInterestOverTimeData] = useState(null);
    const [userId, setUserId] = useState(null); 

    useEffect(() => {
        const storedUserId = sessionStorage.getItem("userId");
        if (storedUserId) {
            setUserId(storedUserId);
        }

        if (userId) {
            api.get(`/access/dashboard/${userId}`)
                .then(response => {
                    setDailyVisitsData(response.data);
                })
                .catch(error => {
                    console.error("Erro ao obter dados de visitas diárias:", error);
                });
      
            api.get(`/access/dashboard/${userId}`)
                .then(response => {
                    setInterestOverTimeData(response.data);
                })
                .catch(error => {
                    console.error("Erro ao obter dados de interesse ao longo do tempo:", error);
                });
        }
    }, [userId]);

    return (
        <div className={styles.charts}>
            {dailyVisitsData && (
                <div className={styles.chart}>
                    <h2>Visitas Diárias</h2>
                    <Line data={dailyVisitsData} />
                </div>
            )}
            {interestOverTimeData && (
                <div className={styles.chart}>
                    <h2>Interesse ao Longo do Tempo</h2>
                    <Line data={interestOverTimeData} />
                </div>
            )}
        </div>
    );
}

export default Charts;

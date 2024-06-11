import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './Charts.module.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Charts = () => {
    const dailyVisitsData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Visitas Diárias',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    };

    const interestOverTimeData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Interesse ao Longo do Tempo',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: 'rgba(153,102,255,1)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div className={styles.charts}>
            <div className={styles.chart}>
                <h2>Visitas Diárias</h2>
                <Line data={dailyVisitsData} />
            </div>
            <div className={styles.chart}>
                <h2>Interesse ao Longo do Tempo</h2>
                <Line data={interestOverTimeData} />
            </div>
        </div>
    );
}

export default Charts;

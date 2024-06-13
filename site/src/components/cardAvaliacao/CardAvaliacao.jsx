import React from 'react';
import styles from './CardAvaliacao.module.css';

function CardAvaliacao ({ nome, foto, comentario, data, rating }) {
  return (
    <div className={styles.avaliacaoCard}>
        <div className={styles.details}>
        <h3>{nome}</h3>
        <p>{comentario}</p>
        <span className={styles.date}>{data}</span>
      </div>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
          key={star}
          className={`${styles.star} ${star <= rating ? styles.filled : styles.outlined}`}
        >
          ★
        </span>
        ))}
      </div>
    </div>
  );
};

export default CardAvaliacao;
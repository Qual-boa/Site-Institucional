import React, { useEffect, useState } from 'react';
import "../../global.css";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, modalText }) => {
    if (!isOpen) return null;

    return (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={onClose}>&times;</span>
          <span>TESTE</span>
          <span>{modalText}</span>
        </div>
      </div>
    );
  };
  
  export default Modal;
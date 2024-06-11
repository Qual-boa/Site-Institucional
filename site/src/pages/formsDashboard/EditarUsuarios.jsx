import React from 'react';
import styles from './Forms.module.css';

const EditarUsuarios = ({ closeModal }) => {
    return (
        <div className={styles.form}>
             <img src={require('../../assets/asset-cadastro-usuario/avatar.svg').default} alt="User Icon" className={styles.userIcon} />
            <h2 id="editar-usuarios-form">EDITAR USUÁRIOS</h2>
            <form aria-labelledby="editar-usuarios-form">
                <label htmlFor="name">NOME:</label>
                <input type="text" id="name" name="name" placeholder="Matheus" aria-required="true" />
                <label htmlFor="email">E-MAIL:</label>
                <input type="email" id="email" name="email" placeholder="matheus@email.com" aria-required="true" />
                <label htmlFor="password">SENHA:</label>
                <input type="password" id="password" name="password" placeholder="********" aria-required="true" />
                <div className={styles.formButtons}>
                    <button type="button" onClick={closeModal} aria-label="Cancelar">CANCELAR</button>
                    <button type="submit" aria-label="Salvar usuário">SALVAR</button>
                </div>
            </form>
        </div>
    );
}

export default EditarUsuarios;

import React from 'react';
import styles from './Forms.module.css';

const AdicionarUsuarios = ({ closeModal }) => {
    return (
        <div className={styles.form}>
            <img src={require('../../assets/asset-cadastro-usuario/avatar.svg').default} alt="User Icon" className={styles.userIcon} />
            <h2 id="adicionar-usuarios-form">ADICIONAR USUÁRIOS</h2>
            <form aria-labelledby="adicionar-usuarios-form">
                <label htmlFor="newName">NOME:</label>
                <input type="text" id="newName" name="newName" placeholder="Digite Nome" aria-required="true" />
                <label htmlFor="email">E-MAIL:</label>
                <input type="email" id="email" name="email" placeholder="Digite E-mail" aria-required="true" />
                <label htmlFor="newPassword">SENHA:</label>
                <input type="password" id="newPassword" name="newPassword" placeholder="Digite senha" aria-required="true" />
                <div className={styles.formButtons}>
                    <button type="button" onClick={closeModal} aria-label="Cancelar">CANCELAR</button>
                    <button type="submit" aria-label="Salvar usuário">SALVAR</button>
                </div>
            </form>
        </div>
    );
}

export default AdicionarUsuarios;

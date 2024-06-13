import React from 'react';
import styles from './Forms.module.css';
import "../../global.css";
import api from "../../api";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function AdicionarUsuarios ({ closeModal }) {

    const navigate = useNavigate();
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [senhaConfirmacao,setSenhaConfirmacao] = useState("");
    
    const salvarUsuario =()=>{

        if (senha !== senhaConfirmacao) {
            toast.error("As senhas não coincidem.");
            return; 
        }

        api.post("/users/register",{
            name: nome,
            email: email,
            password: senha,
            roleEnum: "ADMIN"
        }).then(()=>{toast.success("Novo Usuário cadastrado com sucesso!");
            navigate("/login");
        }).catch(()=>{toast.error("Ocorreu um erro ao salvar os dados, por favor, tente novamente.")})
    }

    const setarValoresInput=(evento, setState)=>{
        setState(evento.target.value)
    }
    
    
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
                <label htmlFor="newPassword">SENHA NOVAMENTE:</label>
                <input type="password" id="confirmNewPassword" name="confirmNewPassword" placeholder="Digite senha novamente" aria-required="true" />
                <div className={styles.formButtons}>
                    <button type="button" onClick={closeModal} aria-label="Cancelar">CANCELAR</button>
                    <button type="submit" aria-label="Salvar usuário" onClick={salvarUsuario}>SALVAR</button>
                </div>
            </form>
        </div>
    );
}

export default AdicionarUsuarios;

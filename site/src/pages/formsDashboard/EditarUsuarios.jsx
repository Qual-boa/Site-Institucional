import React, { useState, useEffect, useCallback } from 'react';
import styles from './Forms.module.css';
import api from "../../api";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function EditarUsuarios({ closeModal }) {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmacao, setSenhaConfirmacao] = useState("");
    const userId = sessionStorage.getItem("userId");

    const fetchUsuario = useCallback(async () => {
        try {
            const response = await api.get(`/users/${userId}`);
            const usuarioData = response.data;
            setUsuario(usuarioData);
            setName(usuarioData.name || "");
            setEmail(usuarioData.email || "");
        } catch (error) {
            console.error("Erro ao buscar informações do usuário:", error);
        }
    },[userId]);

    useEffect(() => {
        fetchUsuario();
    }, [fetchUsuario]);

    const salvarUsuario = (evento) => {
        evento.preventDefault();

        if (senha !== senhaConfirmacao) {
            toast.error("As senhas não coincidem.");
            return;
        }

        api.put(`/users/${userId}`, {
            name,
            email,
            password: senha
        }).then(() => {
            toast.success("Usuário atualizado com sucesso!");
            navigate("/dashboard");
        }).catch(() => {
            toast.error("Ocorreu um erro ao salvar os dados, por favor, tente novamente.")
        });
    }

    const setarValoresInput = (evento, setState) => {
        setState(evento.target.value);
    }

    return (
        <div className={styles.form}>
            <img src={require('../../assets/asset-cadastro-usuario/avatar.svg').default} alt="User Icon" className={styles.userIcon} />
            <h2 id="editar-usuarios-form">EDITAR USUÁRIOS</h2>
            <form aria-labelledby="editar-usuarios-form" onSubmit={salvarUsuario}>
                <label htmlFor="name">NOME:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={usuario ? usuario.name || "Nome" : "Carregando..."}
                    aria-required="true"
                    value={name}
                    onChange={(e) => setarValoresInput(e, setName)}
                />
                <label htmlFor="email">E-MAIL:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={usuario ? usuario.email || "Email" : "Carregando..."}
                    aria-required="true"
                    value={email}
                    onChange={(e) => setarValoresInput(e, setEmail)}
                />
                <label htmlFor="password">SENHA:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="********"
                    aria-required="true"
                    value={senha}
                    onChange={(e) => setarValoresInput(e, setSenha)}
                />
                <label htmlFor="password-confirmacao">SENHA NOVAMENTE:</label>
                <input
                    type="password"
                    id="password-confirmacao"
                    name="password-confirmacao"
                    placeholder="********"
                    aria-required="true"
                    value={senhaConfirmacao}
                    onChange={(e) => setarValoresInput(e, setSenhaConfirmacao)}
                />
                <div className={styles.formButtons}>
                    <button type="button" onClick={closeModal} aria-label="Cancelar">CANCELAR</button>
                    <button type="submit" onClick={salvarUsuario} aria-label="Salvar usuário">SALVAR</button>
                </div>
            </form>
        </div>
    );
}

export default EditarUsuarios;

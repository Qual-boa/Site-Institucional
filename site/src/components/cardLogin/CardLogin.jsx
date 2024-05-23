import styles from "./CardLogin.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api";
import { toast } from 'react-toastify';
import "../../global.css";
import icone from "../../assets/icon-user.svg"

export function CardLogin() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const autenticarUsuario = () => {

        api.post("/users/login", {
            login: email,
            password: senha,
        }).then((response) => {
            sessionStorage.setItem('qabToken', response.data.token)
            toast.success("Usuário logado com sucesso!");
            navigate("/quem-somos");
        }).catch(() => { toast.error("Ocorreu um erro ao salvar os dados, por favor, tente novamente.") })
    }

    const setarValoresInput = (evento, setState) => {
        setState(evento.target.value)
    }

    return (
        <div className={styles["card"]}>
            <img src={icone} alt="icone do usuário" className={styles["icon-user"]} />
            <div className={styles["card-body"]}>
                <h1 className={styles["card-title"]}><b>LOGIN</b></h1>
                <form>
                    <div className={styles["form-group"]}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" className={styles["form-control"]} id="email" aria-describedby="emailHelp" placeholder="Digite o seu e-mail" onChange={(e) => setarValoresInput(e, setEmail)} />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" className={styles["form-control"]} id="senha" placeholder="Digite a sua senha" onChange={(e) => setarValoresInput(e, setSenha)} />
                    </div>
                    <button type="button" className={styles["botao-entrar-usuario"]} onClick={autenticarUsuario}>ENTRAR</button>
                </form>
            </div>
        </div>
    );
}
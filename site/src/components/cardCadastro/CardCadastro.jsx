import styles from "./CardCadastro.module.css";
import "../../global.css";
import avatar from "../../assets/asset-cadastro-usuario/avatar.svg"; // Importe o seu arquivo de imagem SVG
import { Link } from 'react-router-dom';
import api from "../../api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function CardCadastro() {
    const navigate = useNavigate();
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [senhaConfirmacao] = useState("");
    const salvarUsuario =()=>{

        if (senha !== senhaConfirmacao) {
            alert("Senhas não coincidem. Tente novamente");toast.error("As senhas não coincidem.");
            return; 
        }

        api.post("/users/register",{
            name: nome,
            email,
            password: senha,
            userTypeEnum: "COMMON",
            roleEnum: "USER"
        }).then(()=>{alert("Usuário Cadastrado com sucesso!");toast.success("Novo Usuário cadastrado com sucesso!");
            navigate("/UsuarioFinal")
        }).catch(()=>{alert("Erro ao efetuar o cadastro, tente novamente");toast.error("Ocorreu um erro ao salvar os dados, por favor, tente novamente.")})
    }

    const setarValoresInput=(evento, setState)=>{
        setState(evento.target.value)
    }
    
    

    return (
        <div className={styles["containerCadastroUsuario"]}> {/* Adicione esta div */}        
            <div className={styles["card"]}>            
            <img src={avatar} alt="Avatar" className={styles["avatar"]}/>
                <div className={styles["card-body"]}>
                    <h1 className={styles["card-title"]}><b>CADASTRE-SE</b></h1>
                    <form>
                        <div className={styles["form-group"]}>
                            <label htmlFor="email"><b>E-MAIL:</b></label>
                            <input type="email" className={styles["form-control"]} id="email" aria-describedby="emailHelp" placeholder="Digite seu e-mail" onChange={(e) => setarValoresInput(e, setEmail)}/>
                        </div>
                        <div className={styles["form-group"]}>
                            <label htmlFor="nome"><b>NOME COMPLETO:</b></label>
                            <input type="text" className={styles["form-control"]} id="nome" aria-describedby="nomeHelp" placeholder="Digite seu nome completo" onChange={(e) => setarValoresInput(e, setNome)}/>
                        </div>
                        <div className={styles["form-group"]}>
                            <label htmlFor="senha"><b>SENHA:</b></label>
                            <input type="password" className={styles["form-control"]} id="senha" placeholder="Digite sua senha" onChange={(e) => setarValoresInput(e, setSenha)}/>
                        </div>
                        <div className={styles["form-group"]}>
                            <label htmlFor="senhaConfirmacao"><b>CONFIRME A SENHA:</b></label>
                            <input type="password" className={styles["form-control"]} id="senhaConfirmacao" placeholder="Digite sua senha novamente" />
                        </div>
                        <button type="submit" className={styles["botao-entrar-usuario"]} onClick={salvarUsuario}>CADASTRAR</button>
                        <div className={styles["loginExistente"]}>
                            Já possui Login?<Link to="/login" className={styles.entrar}>Entrar</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default CardCadastro;
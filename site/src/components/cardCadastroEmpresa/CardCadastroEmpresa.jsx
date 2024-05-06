import styles from "./CardCadastroEmpresa.module.css";
import "../../global.css";
import icone from "../../assets/icon-user.svg"
import { Link } from 'react-router-dom';

export function CardLoginEmpresa() {

    return (
        <div className={styles["card"]}>
            <img src={icone}alt="icone do usuário" className={styles["icon-user"]} />
            <div className={styles["card-body"]}>
                <h1 className={styles["card-title"]}><b>LOGIN</b></h1>
                <form>
                <div className={styles["form-group"]}>
                        <label htmlFor="text">CNPJ</label>
                        <input type="text" className={styles["form-control"]} id="cnpj" placeholder="Digite seu CNPJ"/>
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="text">Nome Responsável</label>
                        <input type="text" className={styles["form-control"]} id="nome-responsavel" aria-describedby="emailHelp" placeholder="Digite o nome do responsável"/>
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="email">E-mail Responsável</label>
                        <input type="email" className={styles["form-control"]} id="email" aria-describedby="emailHelp" placeholder="Digite o e-mail do responsável"/>
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" className={styles["form-control"]} id="senha" placeholder="Digite sua senha"/>
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="senha">Digite A Senha Novamente</label>
                        <input type="password" className={styles["form-control"]} id="senha" placeholder="Digite sua senha novamente"/>
                    </div>
                    <button type="submit" className={styles["botao-entrar-usuario"]}><b>CADASTRAR</b></button>
                    <div className={styles["loginExistente"]}>
                            Já possui Login?<Link to="/loginEmpresa" className={styles.entrar}>Entrar</Link>
                        </div>
                </form>
            </div>
        </div>
    );


}
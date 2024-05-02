import styles from "./CardLoginEmpresa.module.css";
import "../../global.css";
import icone from "../../assets/icon-user.svg"

export function CardLoginEmpresa() {

    return (
        <div className={styles["card"]}>
            <img src={icone}alt="icone do usuário" className={styles["icon-user"]} />
            <div className={styles["card-body"]}>
                <h1 className={styles["card-title"]}>Login</h1>
                <form>
                <div className={styles["form-group"]}>
                        <label htmlFor="email">CNPJ</label>
                        <input type="email" className={styles["form-control"]} id="cnpj" placeholder="Digite seu CNPJ"/>
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" className={styles["form-control"]} id="email" aria-describedby="emailHelp" placeholder="Digite o seu e-mail"/>
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" className={styles["form-control"]} id="senha" placeholder="Digite a sua senha"/>
                    </div>
                    <button type="submit" className={styles["botao-entrar-usuario"]}>Entrar</button>
                </form>
            </div>
        </div>
    );


}
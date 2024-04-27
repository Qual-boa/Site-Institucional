import styles from "./CardLogin.module.css";
import "../../global.css";

export function CardLogin() {

    return (
        <div className={styles["card"]}>
            <div className={styles["card-body"]}>
                <h1 className={styles["card-title"]}>Login</h1>
                <form>
                    <div className={styles["form-group"]}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" className={styles["form-control"]} id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" className={styles["form-control"]} id="senha" />
                    </div>
                    <button type="submit" className={styles["botao-entrar-usuario"]}>Entrar</button>
                </form>
            </div>
        </div>
    );


}
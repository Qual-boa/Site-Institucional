import styles from "./CardCadastro.module.css";
import "../../global.css";
import avatar from "../../assets/asset-cadastro-usuario/avatar.svg"; // Importe o seu arquivo de imagem SVG
import { Link } from 'react-router-dom';

function CardCadastro() {
    return (
        <div className={styles["containerCadastroUsuario"]}> {/* Adicione esta div */}        
            <div className={styles["card"]}>            
            <img src={avatar} alt="Avatar" className={styles["avatar"]}/>
                <div className={styles["card-body"]}>
                    <h1 className={styles["card-title"]}><b>CADASTRE-SE</b></h1>
                    <form>
                        <div className={styles["form-group"]}>
                            <label htmlFor="email"><b>E-MAIL:</b></label>
                            <input type="email" className={styles["form-control"]} id="email" aria-describedby="emailHelp" placeholder="Digite seu e-mail"/>
                        </div>
                        <div className={styles["form-group"]}>
                            <label htmlFor="senha"><b>SENHA:</b></label>
                            <input type="password" className={styles["form-control"]} id="senha" placeholder="Digite sua senha" />
                        </div>
                        <div className={styles["form-group"]}>
                            <label htmlFor="senhaConfirmacao"><b>CONFIRME A SENHA:</b></label>
                            <input type="password" className={styles["form-control"]} id="senhaConfirmacao" placeholder="Digite sua senha novamente" />
                        </div>
                        <button type="submit" className={styles["botao-entrar-usuario"]}>CADASTRAR</button>
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
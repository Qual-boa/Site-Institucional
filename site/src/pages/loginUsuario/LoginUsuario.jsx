import "./LoginUsuario.module.css";
import "../../global.css";
import imgPrincipal from "../../assets/ImgFundo.svg";
import { Link } from 'react-router-dom';

function LoginUsuario(){
    return(
        <div className={styles["background-image"]}>
            <img src={imgPrincipal} alt="Imagem de fundo" />
            <div className="containerLoginUsuario">
                <div className="ImagemDeLogin">
                
                </div>
                <div className={styles["content-loginUsuario"]}>
                    <h1>LOGIN</h1>
                </div>
                <div className={styles["content-input"]}>
                    <h2>E-MAIL:</h2>
                    <input type="text" />
                    <h2>SENHA:</h2>
                    <input type="text" />
                </div>
                <div className={styles["content-botoes"]}>
                    <button><span>ENTRAR</span></button>
                    <span>Não possui login?</span><a href="">Cadastrar</a>
                </div>
                <div className={styles["content-acessos"]}></div>
            </div>
        </div>
    );
}
export default LoginUsuario;
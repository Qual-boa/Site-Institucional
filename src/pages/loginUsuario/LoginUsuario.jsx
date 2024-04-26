import "./LoginUsuario.module.css";
import "../../global.css";
import imgPrincipal from "../../assets/ImgFundo.svg";
import { Link } from 'react-router-dom';

function LoginUsuario(){
    return(
        <div className="background-image">
            <img src={imgPrincipal} alt="Imagem de fundo" />
            <div className="containerLoginUsuario">
                
            </div>
        </div>
    );
}
export default LoginUsuario;
import styles from "./LoginUsuario.module.css";
import "../../global.css";
import NavBar from "../../components/navbar/NavBar";
import logo from "../../assets/logo.svg";
import imgPrincipal from "../../assets/ImgFundo.svg";
import { Link } from 'react-router-dom';

function LoginUsuario(){
    return (
        // Fragmento React para agrupar os elementos retornados
        <>
            <NavBar logoInicio = {logo}/>
            
        </>
    );
}
export default LoginUsuario;
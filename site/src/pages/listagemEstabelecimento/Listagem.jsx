import styles from "./Listagem.module.css";
import "../../global.css";
import NavbarEmpresa from "../../components/navbarEmpresa/NavbarEmpresa";
import logo from "../../assets/QualABoa.svg";
import ResultadoBusca  from "../../components/resultadoBusca/ResultadoBusca";
import FooterEmpresa from "../../components/footerEmpresa/FooterEmpresa";

function Listagem(props){
    const { nome, idade, cidade } = props.location.state.data;

    return(
        <>
        <NavbarEmpresa logoInicio = {logo}/>
            <div className={styles["background-image"]}>
                    <div className={styles["containerBusca"]}>
                        <div>
                          <h1>Dados do Usuário</h1>
                          <p>Nome: {nome}</p>
                          <p>Idade: {idade}</p>
                          <p>Cidade: {cidade}</p>
                        </div>
                <ResultadoBusca/>
                </div>
            </div>
        <FooterEmpresa/>    
        </>
    );
}
export default Listagem;
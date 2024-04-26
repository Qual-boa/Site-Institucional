import styles from "./CadastroUsuario.module.css";
import imgEspuma from "../../assets/asset-cadastro-usuario/Blob16.svg"
import imgCopo from "../../assets/asset-cadastro-usuario/Cilindros.svg"
const CadastroUsuario = () => {
    
    return (
        // Fragmento React para agrupar múltiplos elementos sem adicionar um nó extra ao DOM
        <>
            {/* Renderiza o componente NavBar, passando o logotipo importado como propriedade */}
            {/*<NavBar logoInicio={logo} />*/}
            {/* Contêiner para a imagem de fundo e o título da página */}
            <div className={styles["background-image"]}>
                {/* Imagem de fundo principal */}
                <img src={imgEspuma} alt="Imagem de fundo espuma de cerveja escorrendo" />
                </div>
                <div className={styles["background-imageCopo"]}>
                <img src={imgCopo} alt="Imagem de cilindros do copo" />
                </div>
                

            
        </>
    );
};
// Exporta o componente Home para que possa ser usado em outras partes da aplicação
export default CadastroUsuario;
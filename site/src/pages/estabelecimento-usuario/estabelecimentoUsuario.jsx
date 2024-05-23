import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../global.css";
import styles from "./estabelecimentoUsuario.module.css";
import NavBarQS from "../quemSomos/NavBarQS/navBarQS";
import logoQS from "../../assets/logoBranca.svg";
import Footer from "../../components/footer/Footer";
import { Helmet } from 'react-helmet';

function EstabelecimentoUsuario() {
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Simulação de chamada ao banco de dados para obter a URL da imagem
        const fetchImageUrl = async () => {
            // Exemplo de chamada de API
            const response = await fetch('https://api.exemplo.com/image-url');
            const data = await response.json();
            setImageUrl(data.imageUrl);
        };

        fetchImageUrl();
    }, []);

    const handleNavigation = () => {
        navigate('/outra-rota');
    };

    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Modak&display=swap" />
            </Helmet>
            <div className={styles.container}>
                <div
                    className={styles['background-image']}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <NavBarQS logoQS={logoQS} />
                <div className={styles.content}>
                    {/* Conteúdo principal */}
                    <button onClick={handleNavigation}>Ir para outra rota</button>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default EstabelecimentoUsuario;
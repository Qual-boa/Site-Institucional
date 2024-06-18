import NavBar from "../../components/navbar/NavBar";
import styles from "./UsuarioFinal.module.css";
import cervejinha from "../../assets/breja-removebg-preview.png";
import logo from "../../assets/logoBranca.svg";
import Footer from "../../components/footer/Footer";
import Beer4U from "../../assets/beer4u.svg";
import BarRock from "../../assets/barRock.svg";
import Divine from "../../assets/divine.svg"
import { useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from 'react';
import Modal from '../../components/modal/Modal';
import { toast } from "react-toastify";
import api from "../../api";
import apiBlob from "../../api-blob";

function Usuario() {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalText, setModalText] = useState('');
    const [resultados, setResultados] = useState([]);

    const buscarDados = useCallback(() => {
        api.get("/relationship/establishments/top-3")
            .then((response) => {
                const establishments = response.data;
                const imageRequests = establishments.map(establishment =>
                    apiBlob.get(`/establishments/${establishment[0]}`)
                        .then((response) => {
                            const { data } = response;
                            const profileImage = data.find(image => image.establishmentCategory === 'PROFILE');
                            return {
                                ...establishment,
                                imageUrl: profileImage ? profileImage.imgUrl : 'defaultLogoImage.jpg'
                            };
                        })
                        .catch(() => {
                            return {
                                ...establishment,
                                imageUrl: 'defaultLogoImage.jpg'
                            };
                        })
                    );
        
                    Promise.all(imageRequests)
                        .then(completeResults => { 
                            setResultados(completeResults);
                        })
                        .catch(() => {
                            toast.error("Ocorreu um erro ao carregar algumas imagens, mas os dados foram carregados.");
                        });
            })
            .catch(() => {
                toast.error("Ocorreu um erro ao carregar os dados, por favor, tente novamente.");
            });
    }, []);

    useEffect(() => {
        buscarDados();
    }, [buscarDados]);

    console.log(resultados)
    const openModal = (text) => {
        setModalText(text);
        setModalIsOpen(true);
    };
  
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        // Navega para a página inicial (ou para a página onde está a seção desejada)
        navigate('/home-estabelecimento');

        // Espera um pequeno intervalo de tempo antes de rolar para a seção
        setTimeout(() => {
            var secao = document.getElementById(sectionId);
            if (secao) {
                secao.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // ajuste o tempo conforme necessário
    };

    const scrollBack = (sectionId) => {
        navigate('/');

        setTimeout(() => {
            var secao = document.getElementById(sectionId);
            if (secao) {
                secao.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const scrollListagem = (sectionId) => {
        navigate('/listagem');
        setTimeout(() => {
            var secao = document.getElementById(sectionId);
            if (secao) {
                secao.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };
  
    const goToTela2 = () => {
      scrollListagem('/listagem');
    };
    return (
        <>
            <Modal isOpen={modalIsOpen} onClose={closeModal} modalText={modalText}/>
            <NavBar logoInicio={logo}/>
            <div className={styles["container-fullpage"]}>
                <section className={styles["sessao"]} id="inicio">
                    <div className={styles["container"]}>
                        <div className={styles["pesquisa"]}>
                            <div className={styles["container-inicial"]}>
                                <div className={styles["pesquisa-titulo"]}>QUAL A BOA </div>
                                <div className={styles["pesquisa-interrogacao"]}>?</div>
                                <span className={styles["subtitulo"]}>ENCONTRE QUAL É A SUA BOA</span>
                            </div>
                            <img src={cervejinha} alt="Cervejinha" className={styles["cervejinha"]} />
                        </div>
                        <div className={styles["container-input"]}>
                            <button type="button" onClick={goToTela2} className={styles["botao-principal"]}>PESQUISAR</button>
                        </div>
                    </div>
                </section>
               <section className={styles["sessao"]} id="cidades"> 
                </section>
                <section className={styles["sessao"]} id="bares">
                    <div className={styles["bares"]}>
                        <div className={styles["linha"]}></div>
                        <h1>BARES MAIS BEM AVALIADOS</h1>
                        <div className={styles["bares-containers"]}>
                            <div className={styles["bares-box"]}>
                                <div className={styles["bares-img"]}>
                                    <img src={Beer4U} alt="Imagem do estabelecimento" />
                                </div>

                                <div className={styles["bares-info"]}>
                                    <h3>BEER4U</h3>
                                    <span>
                                        Bar em todo Brasil com atualizações diárias do cardápio         </span>
                                    <button onClick={() => openModal('Um bar de tap house de cerveja artesanal é um estabelecimento que se concentra na oferta de cervejas produzidas localmente ou regionalmente, muitas vezes em pequenos lotes e com métodos tradicionais')} className={styles["botao-vermais"]} type="cadastrar">VER MAIS</button>
                                </div>
                            </div>
                            <div className={styles["bares-box"]}>
                                <div className={styles["bares-img"]}>
                                    <img src={BarRock} alt="Imagem do estabelecimento" />
                                </div>

                                <div className={styles["bares-info"]}>
                                    <h3>BAR DE ROCK</h3>
                                    <span>
                                        Bar em todo Brasil com atualizações diárias do cardápio         </span>
                                    <button onClick={() => openModal('É um local que celebra a cultura e a música do rock n roll, oferecendo uma atmosfera energética e uma seleção de músicas de bandas de rock famosas')} className={styles["botao-vermais"]} type="cadastrar">VER MAIS</button>
                                </div>
                            </div>
                            <div className={styles["bares-box"]}>
                                <div className={styles["bares-img"]}>
                                    <img src={Divine} alt="Imagem do estabelecimento" />
                                </div>

                                <div className={styles["bares-info"]}>
                                    <h3>DIVINE</h3>
                                    <span>
                                        Bar em todo Brasil com atualizações diárias do cardápio         </span>
                                    <button onClick={() => openModal('Um estabelecimento que oferece uma experiência gastronômica sofisticada e de alta qualidade, com ênfase na culinária refinada e na apresentação cuidadosa dos pratos')} className={styles["botao-vermais"]} type="cadastrar">VER MAIS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles["sessao"]} id="sugestoes">
                    <div className={styles["cidades-procuradas"]}>
                        <div className={styles["linha"]}></div>
                        <h1>SUGESTÕES DO MÊS</h1>
                        <div className={styles["sugestoes-containers"]}>
                            <div className={styles["sugestoes-box"]}>
                                <div className={styles["sugestoes-img-entradas"]}></div>
                                <div className={styles["sugestoes-info"]}>
                                    <div className={styles["sugestoes-info-txt"]}>
                                        <h3>ENTRADINHAS</h3>
                                        <span>Comece a noite com aperitivos incríveis.</span>
                                    </div>
                                    <div className={styles["sugestoes-info-btn"]}>
                                        <button onClick={() => openModal('As entradinhas, também conhecidas como petiscos ou aperitivos, são pequenas porções de alimentos servidas antes do prato principal em muitos restaurantes e bares')} className={styles["botao-visitar"]} type="cadastrar">VER MAIS</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["sugestoes-box"]}>
                                <div className={styles["sugestoes-img-bolinhos"]}></div>
                                <div className={styles["sugestoes-info"]}>
                                    <div className={styles["sugestoes-info-txt"]}>
                                        <h3>BOLINHO DE FEIJOADA</h3>
                                        <span>Bolinhos caseiros fetos com a feijoada mais famosa de SP.</span>
                                    </div>
                                    <div className={styles["sugestoes-info-btn"]}>
                                        <button onClick={() => openModal('O bolinho de feijoada é uma versão empanada e frita do clássico prato brasileiro, feijoada')} className={styles["botao-visitar"]} type="cadastrar">VER MAIS</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["sugestoes-box"]}>
                                <div className={styles["sugestoes-img-drinks"]}></div>
                                <div className={styles["sugestoes-info"]}>
                                    <div className={styles["sugestoes-info-txt"]}>
                                        <h3>DRINKS SAZONAIS</h3>
                                        <span>Drinks feitos com as melhores frutas da estação.</span>
                                    </div>
                                    <div className={styles["sugestoes-info-btn"]}>
                                        <button onClick={() => openModal('Os drinks sazonais são coquetéis criados com ingredientes frescos e sazonais, que refletem as características e sabores das estações do ano')} className={styles["botao-visitar"]} type="cadastrar">VER MAIS</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["sugestoes-box"]}>
                                <div className={styles["sugestoes-img-cerveja"]}></div>
                                <div className={styles["sugestoes-info"]}>
                                    <div className={styles["sugestoes-info-txt"]}>
                                        <h3>4 TONS DE CERVEJA</h3>
                                        <span>Degustação de todas as cervejas da casa.</span>
                                    </div>
                                    <div className={styles["sugestoes-info-btn"]}>
                                        <button onClick={() => openModal('4 tons de cerveja refere-se a uma degustação que oferece uma variedade de cervejas diferentes, representando uma gama de estilos e sabores')} className={styles["botao-visitar"]} type="cadastrar">VER MAIS</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles["sessao"]} id="boa">
                    <div className={styles["cidades-procuradas"]}>
                        <div className={styles["linha"]}></div>
                        <h1>QUAL A SUA BOA?</h1>
                        <div className={styles["boa-containers"]}>
                            <div className={styles["boa-bloco"]}>
                                <div className={styles["boa-foto1"]}>
                                </div>
                                <div className={styles["boa-box"]}>
                                    <div className={styles["boa-txt1"]}>
                                        <h3>DONO DO ESTABELECIMENTO</h3>
                                        <h6>$$ GRATUITO</h6>

                                        <span>
                                            Com o você pode cadastrar seu estabelecimento,
                                             ser avaliado, impulsionar seu negócio e deixa-lo com a sua cara!
                                        </span>
                                        <button className={styles["botao-visitar"]} type="cadastrar" to="outra-pagina" smooth={true} onClick={() => scrollToSection('inicio')}>SAIBA MAIS</button>
                                    </div>

                                </div>
                            </div>
                            <div className={styles["boa-bloco"]}>
                                <div className={styles["boa-box"]}> 
                                    <div className={styles["boa-txt2"]}>
                                        <h3>ROLEZEIRO ATUALIZADO</h3>
                                        <h6>$$ GRATUITO</h6>

                                        <span>
                                            E você que busca um rolê inesquecível pode procurar o melhor lugar através
                                            do nosso app, basta filtrar de acordo com a sua preferência
                                        </span>
                                        <button className={styles["botao-visitar"]} type="cadastrar" to="outra-pagina" smooth={true} onClick={() => scrollBack('inicio')}>SAIBA MAIS</button>
                                    </div>
                                </div>
                                <div className={styles["boa-foto2"]}>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default Usuario;
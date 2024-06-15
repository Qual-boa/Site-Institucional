import NavBar from "../../components/navbar/NavBar";
import styles from "./UsuarioFinal.module.css";
import cervejinha from "../../assets/breja-removebg-preview.png";
import logo from "../../assets/QualABoa.svg";
import Footer from "../../components/footer/Footer";
import SaoPaulo from "../../assets/SaoPaulo.svg";
import RioJaneiro from "../../assets/RioJaneiro.svg";
import XiqueXique from "../../assets/XiqueXique.svg";
import Recife from "../../assets/Recife.svg";
import Beer4U from "../../assets/beer4u.svg";
import BarRock from "../../assets/barRock.svg";
import Divine from "../../assets/divine.svg"
import Entradas from "../../assets/entradas.svg";
import Bolinho from "../../assets/bolinho.svg";
import Drinks from "../../assets/drinks.svg"
import TonsCerveja from "../../assets/TonsCerveja.svg"
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Modal from '../../components/modal/Modal';

function Usuario() {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalText, setModalText] = useState('');

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
                            <input className={styles["input-principal"]} type="text" placeholder="Escreva o seu endereço"/>
                            <button type="button" onClick={goToTela2} className={styles["botao-principal"]}>PESQUISAR</button>
                        </div>
                    </div>
                </section>
                <div className={styles["container-button"]}>
                    <button className={styles["button-filter"]}>+SERTANEJO</button>
                    <button className={styles["button-filter"]}>+CASEIRO</button>
                    <button className={styles["button-filter"]}>+BOTECO</button>
                    <button className={styles["button-filter"]}>+GOURMET</button>
                    <button className={styles["button-filter"]}>+ROCK</button>
                    <button className={styles["button-filter"]}>+AO VIVO</button>
                    <button className={styles["button-filter"]}>+BALADA</button>
                </div>
               <section className={styles["sessao"]} id="cidades"> 
                <div className={styles["cidades-procuradas"]}>
                    <div className={styles["linha"]}></div>
                    <h1>CIDADES MAIS PROCURADAS</h1>
                    <div className={styles["cidades-containers"]}>
                        <div className={styles["cidades-box"]}>
                            <div className={styles["cidades-infos"]}>
                                <h3>SÃO PAULO</h3>
                                <span>
                                    Conhecida por sua gastronomia contemporanea metropolitana etc etc etc 
                                </span>
                                <button onClick={() => openModal('São Paulo é conhecida por sua vibrante vida noturna, com uma grande variedade de bares, restaurantes, casas de show e baladas')} className={styles["botao-vermais"]} type="cadastrar">VER MAIS</button>
                            </div>
                            <div className={styles["cidades-img"]}>
                                <img src={SaoPaulo} alt="Imagem da cidade" />
                            </div>
                        </div>
                        <div className={styles["cidades-box"]}>
                        <div className={styles["cidades-infos"]}>
                                <h3>XIQUE-XIQUE</h3>
                                <span>
                                    Conhecida por sua gastronomia contemporanea metropolitana etc etc etc 
                                </span>
                                <button onClick={() => openModal('É uma cidade localizada no interior da Bahia, conhecida por sua hospitalidade e cultura tradicional')} className={styles["botao-vermais"]} type="cadastrar">VER MAIS</button>
                            </div>
                            <div className={styles["cidades-img"]}>
                                <img src={XiqueXique} alt="Imagem da cidade" />
                            </div>
                        </div>
                        <div className={styles["cidades-box"]}>
                        <div className={styles["cidades-infos"]}>
                                <h3>RIO DE JANEIRO</h3>
                                <span>
                                    Conheça o calor da cidade mais fervorosa do Brasil etc etc etc
                                </span>
                                <button onClick={() => openModal("É famoso por suas belas praias, paisagens deslumbrantes e uma atmosfera descontraída")} className={styles["botao-vermais"]} type="cadastrar">VER MAIS</button>
                            </div>
                            <div className={styles["cidades-img"]}>
                                <img src={RioJaneiro} alt="Imagem da cidade" />
                            </div> 
                        </div>
                        <div className={styles["cidades-box"]}>
                        <div className={styles["cidades-infos"]}>
                                <h3>RECIFE</h3>
                                <span>
                                    Conheça o calor da cidade mais fervorosa do Brasil etc etc etc
                                </span>
                                <button onClick={() => openModal('Capital de Pernambuco, é uma cidade conhecida por sua rica herança cultural, manifestada em sua música, dança, arte e gastronomia')} className={styles["botao-vermais"]} type="cadastrar">VER MAIS</button>
                            </div>
                            <div className={styles["cidades-img"]}>
                                <img src={Recife} alt="Imagem da cidade" />
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <section className={styles["sessao"]} id="bares">
                    <div className={styles["bares"]}>
                        <div className={styles["linha"]}></div>
                        <h1>BARES MAIS VISTOS</h1>
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
                                <div className={styles["sugestoes-img"]}>
                                    <img src={Entradas} alt="" />
                                </div>
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
                                <div className={styles["sugestoes-img"]}>
                                    <img src={Bolinho} alt="" />
                                </div>
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
                                <div className={styles["sugestoes-img"]}>
                                    <img src={Drinks} alt="" />
                                </div>
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
                                <div className={styles["sugestoes-img"]}>
                                    <img src={TonsCerveja} alt="" />
                                </div>
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
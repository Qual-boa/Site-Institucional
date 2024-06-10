import NavBar from "../../components/navbar/NavBar";
import styles from "./UsuarioFinal.module.css";
import cervejinha from "../../assets/breja-removebg-preview.png";
import logo from "../../assets/QualABoa.svg";
import Footer from "../../components/footerEmpresa/FooterEmpresa";
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

function Usuario() {
    return (
        <>
            <NavBar logoInicio={logo}/>
            <div className={styles["container-fullpage"]}>
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
                        <button className={styles["botao-principal"]} type="cadastrar">PESQUISAR</button>
                    </div>
                </div>
                <div className={styles["display-logos"]}>
                    <div className={styles["logos"]}></div>
                    <div className={styles["logos"]}></div>
                    <div className={styles["logos"]}></div>
                    <div className={styles["logos"]}></div>
                    <div className={styles["logos"]}></div>
                    <div className={styles["logos"]}></div>
                </div>
                <div className={styles["pesquisa-filtros"]}>
                    <h3>PROCURE SEU ROLÊ</h3>
                    <div className={styles["container-inpu-filtro"]}>
                        <input className={styles["input-secundaria"]} type="text" placeholder="Pesquise a sua boa"/>
                        <button className={styles["botao-secundario"]} type="cadastrar">PESQUISAR</button>
                    </div>
                </div>
                <div className={styles["container-button"]}>
                    <button className={styles["button-filter"]}>+SERTANEJO</button>
                    <button className={styles["button-filter"]}>+CASEIRO</button>
                    <button className={styles["button-filter"]}>+BOTECO</button>
                    <button className={styles["button-filter"]}>+GOURMET</button>
                    <button className={styles["button-filter"]}>+ROCK</button>
                    <button className={styles["button-filter"]}>+AO VIVO</button>
                    <button className={styles["button-filter"]}>+BALADA</button>
                </div>
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
                                <button className={styles["botao-vermais"]} type="cadastrar">VER MAIS</button>
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
                                <button className={styles["botao-vermais"]} type="cadastrar">VER MAIS</button>
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
                                <button className={styles["botao-vermais"]} type="cadastrar">VER MAIS</button>
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
                                <button className={styles["botao-vermais"]} type="cadastrar">VER MAIS</button>
                            </div>
                            <div className={styles["cidades-img"]}>
                                <img src={Recife} alt="Imagem da cidade" />
                            </div>
                        </div>
                    </div>
                </div>
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
                                <button className={styles["botao-vermais"]} type="cadastrar">VER MAIS</button>
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
                                <button className={styles["botao-vermais"]} type="cadastrar">VER MAIS</button>
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
                                <button className={styles["botao-vermais"]} type="cadastrar">VER MAIS</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["cidades-procuradas"]}>
                    <div className={styles["linha"]}></div>
                    <h1>SUGESTÕES DO MÊS</h1>
                    <div className={styles["cidades-containers"]}>
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
                                    <button className={styles["botao-visitar"]} type="cadastrar">VISITAR</button>
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
                                    <button className={styles["botao-visitar"]} type="cadastrar">VISITAR</button>
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
                                    <button className={styles["botao-visitar"]} type="cadastrar">VISITAR</button>
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
                                    <button className={styles["botao-visitar"]} type="cadastrar">VISITAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <button className={styles["botao-visitar"]} type="cadastrar">SAIBA MAIS</button>
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
                                    <button className={styles["botao-visitar"]} type="cadastrar">SAIBA MAIS</button>
                                </div>
                            </div>
                            <div className={styles["boa-foto2"]}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Usuario;
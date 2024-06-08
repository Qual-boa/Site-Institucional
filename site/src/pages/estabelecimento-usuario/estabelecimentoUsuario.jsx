import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../global.css";
import styles from "./estabelecimentoUsuario.module.css";
import NavBarQS from "../quemSomos/NavBarQS/navBarQS";
import logoQS from "../../assets/logoBranca.svg";
import Footer from "../../components/footer/Footer";
import { Helmet } from 'react-helmet';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import CardAvaliacao from '../../components/cardAvaliacao/CardAvaliacao';
import CardAtracao from '../../components/cardAtracao/CardAtracao';
import ModalImage from "react-modal-image";
import Modal from '../../components/modalAvaliacao/modalAvaliacao'; 

function EstabelecimentoUsuario() {
    const [imageUrls, setImageUrls] = useState([
        "https://via.placeholder.com/300.png?text=Image+1",
        "https://via.placeholder.com/300.png?text=Image+2",
        "https://via.placeholder.com/300.png?text=Image+3",
        "https://via.placeholder.com/300.png?text=Image+4",
        "https://via.placeholder.com/300.png?text=Image+5"
    ]);

    const Avaliacao = () => {
        const navigate = useNavigate();
        const [id, getId] = useState("");
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedRating, setSelectedRating] = useState(0);
        const [comment, setComment] = useState('');
        const [avaliacoes, setAvaliacoes] = useState([
            { nome: 'Marcos', comentario: 'Booommm!!!', data: '20/02/2024', rating: 5 },
            { nome: 'Cláudia', comentario: 'Muito bom!!!!', data: '20/02/2024', rating: 5 },
            { nome: 'Rodrigo', comentario: 'Bom demais!', data: '20/02/2024', rating: 5 },
        ]);
        const [currentIndex, setCurrentIndex] = useState(0);

        const handleStarClick = (rating) => {
            setSelectedRating(rating);
            setIsModalOpen(true);
        };

        const handleModalClose = () => {
            setIsModalOpen(false);
        };

        const handleCommentChange = (e) => {
            setComment(e.target.value);
        };

        const handleSubmit = () => {
            const newAvaliacao = {
                nome: 'Usuário', // Você pode substituir isso pelo nome real do usuário
                comentario: comment,
                data: new Date().toLocaleDateString(),
                rating: selectedRating,
            };
            const updatedAvaliacoes = [...avaliacoes, newAvaliacao];
            setAvaliacoes(updatedAvaliacoes);

            // Ajustar currentIndex para mostrar a nova página se necessário
            if (currentIndex + 3 > updatedAvaliacoes.length) {
                setCurrentIndex(Math.max(updatedAvaliacoes.length - 3, 0));
            }

            setIsModalOpen(false);
            setComment('');
            setSelectedRating(0);
        };
        const handlePrev = () => {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        };

        const handleNext = () => {
            if (currentIndex < avaliacoes.length - 3) {
                setCurrentIndex(currentIndex + 1);
            }
        };

        return (
            <div className={styles.avaliacao}>
                <div className={styles.secoes2}>AVALIAÇÕES</div>
                <div className="rating">Avaliar:
                    {[1, 2, 3, 4, 5].map((star) => (
                        <React.Fragment key={star}>
                            <input
                                type="radio"
                                id={`star${star}`}
                                name="rating"
                                value={star}
                                className="mask mask-star-2"
                                onClick={() => handleStarClick(star)}
                            />
                            <label htmlFor={`star${star}`} title={`${star} estrelas`}></label>
                        </React.Fragment>
                    ))}
                </div>
                <div className={styles.cardContainer}>
                    {avaliacoes.slice(currentIndex, currentIndex + 3).map((avaliacao, index) => (
                        <CardAvaliacao
                            key={index}
                            nome={avaliacao.nome}
                            comentario={avaliacao.comentario}
                            data={avaliacao.data}
                            rating={avaliacao.rating}
                        />
                    ))}
                </div>
                <div className={styles.navigationButtons}>
                    <button onClick={handlePrev} disabled={currentIndex === 0}>&lt;</button>
                    <button onClick={handleNext} disabled={currentIndex >= avaliacoes.length - 3}>&gt;</button>
                </div>
                {isModalOpen && (
                    <Modal
                        rating={selectedRating}
                        comment={comment}
                        onClose={handleModalClose}
                        onCommentChange={handleCommentChange}
                        onSubmit={handleSubmit}
                        setSelectedRating={setSelectedRating} // Passando a função setSelectedRating para o Modal
                    />
                )}
            </div>
        );
    };

    // const [imageUrl, setImageUrl] = useState('');
    // const navigate = useNavigate();

    // useEffect(() => {
    //     // Simulação de chamada ao banco de dados para obter a URL da imagem
    //     const fetchImageUrl = async () => {
    //         // Exemplo de chamada de API
    //         const response = await fetch('https://api.exemplo.com/image-url');
    //         const data = await response.json();
    //         setImageUrl(data.imageUrl);
    //     };

    //     fetchImageUrl();
    // }, []);

    // function EstabelecimentoUsuario({ estabelecimentoId }) {
    //     const [rating, setRating] = useState(0);

    //     useEffect(() => {
    //         // Simulação de chamada ao banco de dados para obter a avaliação
    //         const fetchRating = async () => {
    //             // Exemplo de chamada de API
    //             const response = await fetch(`https://api.exemplo.com/rating/${estabelecimentoId}`);
    //             const data = await response.json();
    //             setRating(data.rating);
    //         };

    //         fetchRating();
    //     }, [estabelecimentoId]);
    // const [imageUrls, setImageUrls] = useState([]);

    // useEffect(() => {
    //     // Simulação de chamada ao banco de dados para obter as URLs das imagens
    //     const fetchImageUrls = async () => {
    //         // Exemplo de chamada de API
    //         const response = await fetch(`https://api.exemplo.com/images/${estabelecimentoId}`);
    //         const data = await response.json();
    //         setImageUrls(data.imageUrls);
    //     };

    //     fetchImageUrls();
    // }, [estabelecimentoId]);

    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Modak&display=swap" />
            </Helmet>
            <div className={styles.container}>
                <NavBarQS logoQS={logoQS} />
                <div className={styles['background-image']}>
                    <img src="https://bebaindependente.com.br/wp-content/uploads/2020/04/F96260EA-85C4-4C69-A31F-05825AB12679-768x758.jpeg" alt="image beer4u" className={styles.responsiveImage} />
                </div>
                <div className={styles.logoContainer}>
                    <img src="https://static.goomer.app/stores/4501/products/mobile-menu/templates/8761/logo.png?w=1920" alt="Cliente Logo" className={styles.clientLogo} />
                </div>
                <div className={styles["background-imageEstab"]}>
                    <div className={styles["container1"]}>
                        <div className={styles.header}>
                            <div className={styles.nomeEstab}>BEER4U</div>
                            <div className={styles.menu}>
                                <FaFacebook className={styles.midias} />
                                <FaInstagram className={styles.midias} />
                                <TbWorldWww className={styles.midias} />
                            </div>
                            {/* <div className={styles.container}>

                                <div className="rating">
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <input
                                            key={value}
                                            type="radio"
                                            name="rating-9"
                                            className={`mask mask-star-2 ${value <= rating ? 'checked' : ''}`}
                                            checked={value === rating}
                                            readOnly
                                        />
                                    ))}
                                </div> */}
                            <div className="rating">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                            </div>
                        </div>
                        <div className={styles["main-content"]}>
                            <div className="breadcrumbs">
                                <ul>
                                    <li><a>HOME</a></li>
                                    <li><a>ESTABELECIMENTO</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.locationDistance}>
                            <p>Brasil, São Paulo, 100m</p> {/* Ajuste a localização e distância conforme necessário */}
                        </div>
                        <div className={styles.flexContainer}>
                            <div className={styles.favoritar}>
                                <div className="rating gap-1">
                                    Favoritar<input type="radio" name="rating-3" className="mask mask-heart bg-red-400" checked />
                                </div>
                            </div>
                            <div className={styles.facilidades}>
                                Estacionamento - Wi-Fi - TV - Pet Friendly
                            </div>
                        </div>
                        <div className={styles.divisor}>____________________________________________________________________________________________________________</div>
                        <div className={styles.divisor2}>__________</div>
                        <div className={styles.flexContainer2}>
                            <Avaliacao />
                        </div>
                        <div className={styles.divisor}>____________________________________________________________________________________________________________</div>
                        <div className={styles.divisor2}>__________</div>
                        <div className={styles.flexContainer2}>
                            <div className={styles.secoes}>ATRAÇÕES E NOVIDADES</div>
                        </div>
                        <div className={styles.cardContainer2}>
                            <CardAtracao
                                /* foto={} */
                                titulo="SHOW AO VIVO"
                                descricao="A BANDA VIVA virá alegrar nossa noite do dia 15/09/24 a partir das 18:00 horas, entrada gratuita!"
                            />
                            <CardAtracao
                                /* foto={} */
                                titulo="SHOW AO VIVO"
                                descricao="A BANDA VIVA virá alegrar nossa noite do dia 15/09/24 a partir das 18:00 horas, entrada gratuita!"
                            />
                            <CardAtracao
                                /* foto={} */
                                titulo="SHOW AO VIVO"
                                descricao="A BANDA VIVA virá alegrar nossa noite do dia 15/09/24 a partir das 18:00 horas, entrada gratuita!"
                            />
                        </div>
                        <div className={styles.divisor}>____________________________________________________________________________________________________________</div>
                        <div className={styles.divisor2}>__________</div>
                        <div className={styles.flexContainer2}>
                            <div className={styles.secoes}>SAIBA MAIS</div>
                        </div>
                        <div className={styles.saibaMais}>
                            <p>{/* {dadosEstabelecimento.endereco} */}Endereço</p>
                            <div className={styles.mapa}>
                                {/* <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dadosEstabelecimento.endereco)}`} target="_blank" rel="noopener noreferrer">
                                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(dadosEstabelecimento.endereco)}&zoom=15&size=600x300&key=YOUR_GOOGLE_MAPS_API_KEY`} alt="Google Map" />
                                </a> */}
                            </div>
                            <p><strong>FUNCIONAMENTO:</strong> {/* {dadosEstabelecimento.horarioFuncionamento} */}</p>
                            <p><strong>CLIQUE PARA ACESSAR O MENU:</strong> {/* <a href={dadosEstabelecimento.menuLink} target="_blank" rel="noopener noreferrer">Menu</a> */}</p>
                            <p><strong>CONTATO:</strong> {/* {dadosEstabelecimento.telefone} */}</p>
                        </div>
                        <div className={styles.divisor}>____________________________________________________________________________________________________________</div>
                        <div className={styles.divisor2}>__________</div>
                        <div className={styles.flexContainer2}>
                            <div className={styles.secoes}>HISTÓRIA</div>
                        </div>
                        <div className={styles.historia}>Somos um bar criado para inovar, com atualizações diárias e cervejas artesanais inspirando e transformando vidas e pessoas.</div>
                        <div className={styles.divisor}>____________________________________________________________________________________________________________</div>
                        <div className={styles.divisor2}>__________</div>
                        <div className={styles.flexContainer2}>
                            <div className={styles.secoes}>GALERIA</div>
                        </div>
                        <div className={styles.galleryContainer}>
                            {imageUrls.map((url, index) => (
                                <div key={index} className={styles.imageWrapper}>
                                    <ModalImage
                                        small={url}
                                        large={url}
                                        alt={`Imagem ${index + 1}`}
                                        className={styles.roundedImage}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default EstabelecimentoUsuario;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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
import api from "../../api";
import apiBlob from "../../api-blob";

const containerStyle = {
    width: '100%',
    height: '400px'
  };


  function MapComponent({ postalCode, number }) {
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  
    useEffect(() => {
      const fetchCoordinates = async () => {
        try {
          const address = `${postalCode}, ${number}`;
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json`,
            {
              params: {
                address,
                key: 'AIzaSyBfK8M_o3m3AH-NrY2KVjhSSZQD5lgly-I' // Substitua pela sua chave de API do Google Maps
              }
            }
          );
          const { results } = response.data;
          if (results.length > 0) {
            const { lat, lng } = results[0].geometry.location;
            setCoordinates({ lat, lng });
          } else {
            console.error('Endereço não encontrado');
          }
        } catch (error) {
          console.error('Erro ao buscar coordenadas:', error);
        }
      };
  
      if (postalCode && number) {
        fetchCoordinates();
      }
    }, [postalCode, number]);
  
    const openGoogleMaps = () => {
      if (coordinates.lat && coordinates.lng) {
        const url = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;
        window.open(url, '_blank');
      }
    };
    
    return (
      <LoadScript googleMapsApiKey="AIzaSyBfK8M_o3m3AH-NrY2KVjhSSZQD5lgly-I">
        {coordinates.lat && coordinates.lng ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={coordinates}
            zoom={15}
          >
            <Marker 
                        position={coordinates} 
                        onClick={openGoogleMaps} 
                        
                    />
          </GoogleMap>
        ) : (
          <p>Carregando mapa...</p>
        )}
      </LoadScript>
    );
  }

function EstabelecimentoUsuario() {
    const navigate = useNavigate();
    const  id  = "123e4567-e89b-12d3-a456-426614174000"; 
    const [fantasyName, setFantasyName] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [backgroundImage, setBackgroundImage] = useState("");
    const [phone, setPhone] = useState("");
    const [facebookUrl, setFacebookUrl] = useState("");
    const [instagramUrl, setInstagramUrl] = useState("");
    const [telegramUrl, setTelegramUrl] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [complement, setComplement] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [openAt, setOpenAt] = useState("");
    const [closeAt, setCloseAt] = useState("");
    
    // Novos estados para informações adicionais
    const [tv, setTv] = useState(false);
    const [wifi, setWifi] = useState(false);
    const [acessibilidade, setAcessibilidade] = useState(false);
    const [estacionamento, setEstacionamento] = useState(false);
    const [imageUrlsMenu, setImageUrlsMenu] = useState([]);
    const [imageUrlsGallery, setImageUrlsGallery] = useState([]);

    useEffect(()=>{
        
        api.get(`establishments/${id}`).then((response) => {
            const { data } = response;
            const {
                fantasyName
            } = data;
            setFantasyName(fantasyName);
            setPhone(formatPhone(data.information.phone));
            setFacebookUrl(data.information.facebookUrl);
            setInstagramUrl(data.information.instagramUrl);
            setTelegramUrl(data.information.telegramUrl);
            setTv(data.information.hasTv);
            setWifi(data.information.hasWifi);
            setAcessibilidade(data.information.hasAccessibility);
            setEstacionamento(data.information.hasParking);
            setOpenAt("0" + data.information.openAt[0] + ":" + data.information.openAt[1] + "0");
            setCloseAt(data.information.closeAt[0] + ":" + data.information.closeAt[1] + "0");
        }) 
        .catch((error) => {
            console.log("Erro ao buscar informações gerais do estabelecimento:", error);
        });
        api.get(`/address/establishment/${id}`).then((response) => {
            const data  = response.data[0];
            setPostalCode(data.postalCode);
            setStreet(data.street);
            setNumber(data.number);
            setNeighborhood(data.neighborhood);
            setComplement(data.complement);
            setCity(data.city);
            setState(data.state);
        }) 
        .catch((error) => {
            console.log("Erro ao buscar endereço do estabelecimento:", error);
        });
            
        apiBlob.get(`/establishments/${id}`).then((response) => {
            const { data } = response;
            const backgroundImage = data.find(image => image.establishmentCategory === 'BACKGROUND');
            const profileImage = data.find(image => image.establishmentCategory === 'PROFILE');
            const imgsMenu = [];
            const imgsGallery = [];
            data.forEach((d) => {
                if(d.establishmentCategory === "MENU") {
                    imgsMenu.push(d.imgUrl)
                } else if(d.establishmentCategory === "GALLERY") {
                    imgsGallery.push(d.imgUrl);
                }
            });
            setImageUrlsGallery(imgsGallery);
            setImageUrlsMenu(imgsMenu);
            if (backgroundImage) {
                setBackgroundImage(backgroundImage.imgUrl);
            } else {
                setBackgroundImage('defaultBackgroundImage.jpg'); // Use uma imagem padrão se não encontrar a imagem de fundo
            }

            if (profileImage) {
                setProfileImage(profileImage.imgUrl);
            } else {
                setProfileImage('defaultLogoImage.jpg'); // Use uma imagem padrão se não encontrar a imagem de logo
            }
        })
        .catch((error) => {
            console.log("Erro ao buscar as imagens do estabelecimento:", error);
            setBackgroundImage('defaultBackgroundImage.jpg'); // Use uma imagem padrão em caso de erro
            setProfileImage('defaultLogoImage.jpg'); // Use uma imagem padrão em caso de erro
        });
}, [id]);
    const formatAddress = () => {
        return `${street}, ${number}${complement ? `, ${complement}` : ''}, ${neighborhood} - ${city} - ${state}`;
    };
    const renderFacilities = () => {
        const facilities = [];
        if (estacionamento) facilities.push('Estacionamento');
        if (wifi) facilities.push('Wi-Fi');
        if (tv) facilities.push('TV');
        if (acessibilidade) facilities.push('Acessibilidade');
        return facilities.join(' - ');
    };
    const formatPhone = (phone) => {
        if (!phone) return '';
        
        const phoneString = phone.toString().replace(/\D/g, ''); // Remove todos os caracteres não numéricos
      
        if (phoneString.length === 10) {
          return `(${phoneString.slice(0, 2)}) ${phoneString.slice(2, 6)}-${phoneString.slice(6)}`;
        } else if (phoneString.length === 11) {
          return `(${phoneString.slice(0, 2)}) ${phoneString.slice(2, 7)}-${phoneString.slice(7)}`;
        } else {
          return phone; // Retorna o número original se não tiver 10 ou 11 dígitos
        }
      };

    const Avaliacao = () => {
        const navigate = useNavigate();
        const [id, getId] = useState("");
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedRating, setSelectedRating] = useState(0);
        const [comment, setComment] = useState('');
        const [avaliacoes, setAvaliacoes] = useState([
            { nome: 'Marcos', comentario: 'Booommm!!!', data: '20/05/2024', rating: 5 },
            { nome: 'Cláudia', comentario: 'Muito bom!!!!', data: '12/05/2024', rating: 5 },
            { nome: 'Rodrigo', comentario: 'Bom demais!', data: '21/02/2024', rating: 5 },
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
        const formatTime = (time) => {
            if (!time) return '';
          
            const { hour, minute } = time;
            const formattedHour = hour.toString().padStart(2, '0');
            const formattedMinute = minute.toString().padStart(2, '0');
    
          
            return `${formattedHour}:${formattedMinute}`;
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
                <img src={backgroundImage} alt={`Foto do estabelecimento`} className={styles.responsiveImage} />
                </div>                
                <div className={styles.logoContainer}>
                <img src={profileImage} alt="Cliente Logo" className={styles.clientLogo} />
                </div>
                <div className={styles["background-imageEstab"]}>
                    <div className={styles["container1"]}>
                        <div className={styles.header}>
                            <div className={styles.nomeEstab}>{fantasyName}</div>
                            <div className={styles.menu}>
                            {facebookUrl && <a href={facebookUrl}><FaFacebook className={styles.midias} /></a>}
                            {instagramUrl && <a href={instagramUrl}><FaInstagram className={styles.midias} /></a>}
                            {setTelegramUrl && <a href={setTelegramUrl}><TbWorldWww className={styles.midias} /></a>}
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
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked/>
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
                            <p>{neighborhood}, {city}</p> {/* Ajuste a localização e distância conforme necessário */}
                        </div>
                        <div className={styles.flexContainer}>
                            <div className={styles.favoritar}>
                                <div className="rating gap-1">
                                    Favoritar<input type="radio" name="rating-3" className="mask mask-heart bg-red-400" checked />
                                </div>
                            </div>
                            <div className={styles.facilidades}>
                            {renderFacilities()}
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
                        <p><strong>ENDEREÇO:</strong> {formatAddress()}</p>
                            <div className={styles.mapa}>
                            <MapComponent postalCode={postalCode} number={number} />
                            </div>
                            <p><strong>FUNCIONAMENTO:</strong>  {`${openAt} - ${closeAt}`}</p>
                            <p><strong>CONTATO: </strong>{phone}</p>
                        </div>
                        <div className={styles.divisor}>____________________________________________________________________________________________________________</div>
                        <div className={styles.divisor2}>__________</div>
                        <div className={styles.flexContainer2}>
                            <div className={styles.secoes}>MENU</div>
                        </div>
                        <div className={styles.galleryContainer}>
                            {imageUrlsMenu.map((url, index) => (
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
                        <div className={styles.divisor}>____________________________________________________________________________________________________________</div>
                        <div className={styles.divisor2}>__________</div>
                        <div className={styles.flexContainer2}>
                            <div className={styles.secoes}>GALERIA</div>
                        </div>
                        <div className={styles.galleryContainer}>
                            {imageUrlsGallery.map((url, index) => (
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

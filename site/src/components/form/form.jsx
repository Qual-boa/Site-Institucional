
import api from "../../api";
import apiBlob from "../../api-blob";
import { toast } from 'react-toastify';
import styles from "./form.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import axios from "axios";

function Editar() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [selectedProfileFile, setSelectedProfileFile] = useState(null);
    const [selectedBackgroundFile, setSelectedBackgroundFile] = useState(null);
    const [selectedGalleryFiles, setSelectedGalleryFiles] = useState([]);
    const [selectedMenuFiles, setSelectedMenuFiles] = useState([]);
    const [selectedEventFiles, setSelectedEventFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [imagem, setImagem] = useState("");
    const [backgroundImage, setBackgroundImage] = useState("");
    const [phone, setPhone] = useState("");
    const [facebookUrl, setFacebookUrl] = useState("");
    const [instagramUrl, setInstagramUrl] = useState("");
    const [setTelegramUrl, setsetTelegramUrl] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [complement, setComplement] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [openAt, setOpenAt] = useState({ hour: 0, minute: 0 });
    const [closeAt, setCloseAt] = useState({ hour: 0, minute: 0 });
    
    // Novos estados para informações adicionais
    const [tv, setTv] = useState(false);
    const [wifi, setWifi] = useState(false);
    const [acessibilidade, setAcessibilidade] = useState(false);
    const [estacionamento, setEstacionamento] = useState(false);

    useEffect(() => {
        api.get(`establishments/${id}`).then((response) => {
            const { data } = response;
            const {
                imagem,
                phone,
                facebookUrl,
                instagramUrl,
                setTelegramUrl,
                postalCode,
                street,
                number,
                neighborhood,
                complement,
                city,
                state,
                tv,
                wifi,
                acessibilidade,
                estacionamento,
                openAt,
                closeAt
            } = data;
            setImagem(imagem);
            setPhone(phone);
            setFacebookUrl(facebookUrl);
            setInstagramUrl(instagramUrl);
            setsetTelegramUrl(setTelegramUrl);
            setPostalCode(postalCode);
            setStreet(street);
            setNumber(number);
            setNeighborhood(neighborhood);
            setComplement(complement);
            setCity(city);
            setState(state);
            setOpenAt(openAt);
            setCloseAt(closeAt);
            setTv(tv);
            setWifi(wifi);
            setAcessibilidade(acessibilidade);
            setEstacionamento(estacionamento);
        })
            .catch((error) => {
                console.log("Erro ao buscar os detalhes do estabelecimento:", error);
            })
    }, [id]);
    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    };
    const handlePostalCodeChange = async (event) => {
        const cep = event.target.value.replace('-', ''); // Remover o hífen
        setPostalCode(cep);
        console.log("Tamanho do cep " + cep.length)
        if (cep.length === 8) {
            try {
                console.log("try if")
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                const data = response.data;
                if (!data.erro) {
                    setStreet(data.logradouro || "");
                    setNeighborhood(data.bairro || "");
                    setCity(data.localidade || "");
                    setState(data.uf || "");
                } else {
                    toast.warn('CEP não encontrado');
                }
            } catch (error) {
                toast.error('Erro ao buscar o endereço. Verifique o CEP e tente novamente.');
            }
        }
    };
    const handleTimeChange = (event, timeType) => {
        const [hour, minute] = event.target.value.split(':').map(Number);
        if (timeType === "openAt") {
            setOpenAt({ hour, minute });
        } else {
            setCloseAt({ hour, minute });
        }
    };
    const validateTime = () => {
        const openMinutes = openAt.hour * 60 + openAt.minute;
        const closeMinutes = closeAt.hour * 60 + closeAt.minute;
        return openMinutes < closeMinutes;
    };
    const handleCheckboxChange = (event, setStateFunction) => {
        setStateFunction(event.target.checked);
    };
    const handleProfileFileChange = (event) => {
        setSelectedProfileFile(event.target.files[0]);
    };

    const handleBackgroundFileChange = (event) => {
        setSelectedBackgroundFile(event.target.files[0]);
    };
    const handleGalleryFilesChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedGalleryFiles((prevFiles) => [...prevFiles, ...files].slice(0, 8));
    };
    const handleMenuFilesChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedMenuFiles((prevFiles) => [...prevFiles, ...files].slice(0, 8));
    };
    const handleEventFilesChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedEventFiles((prevFiles) => [...prevFiles, ...files].slice(0, 3));
    };

    const handleUpload = async (categoria, file) => {
        if (!file) {
            toast.warn('Por favor, selecione um arquivo antes de fazer o upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('category', categoria);

        try {
            setUploading(true);
            const response = await apiBlob.post(`/establishments/${"123e4567-e89b-12d3-a456-426614174000"}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { imgUrl } = response.data;
            if (categoria === "PROFILE") {
                setImagem(imgUrl);
            } else {
                setBackgroundImage(imgUrl);
            }
            toast.success('Imagem carregada com sucesso!');
        } catch (error) {
            toast.error('Erro ao carregar a imagem. Por favor, tente novamente.');
        } finally {
            setUploading(false);
        }
    };

    const handleSave = async () => {
        try {
            
            await api.put(`/address/${id}`, {
                postalCode,
                street,
                number,
                neighborhood,
                complement,
                city,
                state
            });
            await api.post(`/informations/establishment/${id}`,{
                openAt,
                closeAt,
                tv,
                wifi,
                acessibilidade,
                estacionamento,
                phone,
                facebookUrl,
                instagramUrl,
                setTelegramUrl
            });
            toast.success('Dados editados com sucesso!');
            navigate("/estabelecimento")
        } catch (error) {
            toast.error('Ocorreu um erro ao salvar os dados. Por favor, tente novamente.');
        }
    };

    const handleCancel = () => {
        navigate("/estabelecimento");
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles["secao-direita-editar"]}>
                    <form>
                        <span className={styles["titulo"]}>Edite suas informações:</span>
                        <div>
                            <h3>Insira a logo do seu estabelecimento</h3>
                            <div className={styles.uploadContainer}>
                                <input type="file" className={styles.arquivo} onChange={handleProfileFileChange} />
                                <button type="button" className={styles.upload} onClick={() => handleUpload("PROFILE", selectedProfileFile)} disabled={uploading}>
                                    {uploading ? 'Carregando...' : 'Upload'}
                                </button>
                            </div>
                        </div>
                        <div>
                            <h3>Insira uma imagem de fundo do seu estabelecimento</h3>
                            <div className={styles.uploadContainer}>
                                <input type="file" className={styles.arquivo} onChange={handleBackgroundFileChange} />
                                <button type="button" className={styles.upload} onClick={() => handleUpload("BACKGROUND", selectedBackgroundFile)} disabled={uploading}>
                                    {uploading ? 'Carregando...' : 'Upload'}
                                </button>
                            </div>
                        </div>
                       <InputMask
                            mask="(99) 99999-9999"
                            value={phone}
                            placeholder="Telefone"
                            onChange={(e) => handleInputChange(e, setPhone)}
                        />
                        <InputMask
                            mask="99999-999"
                            value={postalCode}
                            placeholder="CEP"
                            onChange={handlePostalCodeChange}
                        />
                        <input
                            type="text"
                            value={street}
                            placeholder="Rua"
                            onChange={(e) => handleInputChange(e, setStreet)}
                        />
                        <input
                            type="text"
                            value={number}
                            placeholder="Número"
                            onChange={(e) => handleInputChange(e, setNumber)}
                        />
                        <input
                            type="text"
                            value={neighborhood}
                            placeholder="Bairro"
                            onChange={(e) => handleInputChange(e, setNeighborhood)}
                        />
                        <input
                            type="text"
                            value={complement}
                            placeholder="Complemento"
                            onChange={(e) => handleInputChange(e, setComplement)}
                        />
                        <input
                            type="text"
                            value={city}
                            placeholder="Cidade"
                            onChange={(e) => handleInputChange(e, setCity)}
                        />
                        <input
                            type="text"
                            value={state}
                            placeholder="Estado"
                            onChange={(e) => handleInputChange(e, setState)}
                        />
                        <h3>Horário de Funcionamento</h3>
                        <div className={styles.timeContainer}>
                            <label>
                                Abertura:
                                <InputMask
                                    mask="99:99"
                                    value={`${openAt.hour.toString().padStart(2, '0')}:${openAt.minute.toString().padStart(2, '0')}`}
                                    placeholder="HH:MM"
                                    onChange={(e) => handleTimeChange(e, "openAt")}
                                />
                            </label>
                            <label>
                                Fechamento:
                                <InputMask
                                    mask="99:99"
                                    value={`${closeAt.hour.toString().padStart(2, '0')}:${closeAt.minute.toString().padStart(2, '0')}`}
                                    placeholder="HH:MM"
                                    onChange={(e) => handleTimeChange(e, "closeAt")}
                                />
                            </label>
                        </div>
                        <input
                            type="text"
                            value={facebookUrl}
                            placeholder="Facebook"
                            onChange={(e) => handleInputChange(e, setFacebookUrl)}
                        />
                         <input
                            type="text"
                            value={instagramUrl}
                            placeholder="Instagram URL"
                            onChange={(e) => handleInputChange(e, setInstagramUrl)}
                        />
                         <input
                            type="text"
                            value={setTelegramUrl}
                            placeholder="Site Oficial"
                            onChange={(e) => handleInputChange(e, setsetTelegramUrl)}
                        />
                        <input
                            type="text"
                            value={imagem}
                            placeholder="URL da Imagem"
                            onChange={(e) => handleInputChange(e, setImagem)}
                        />
                         <h3>Informações adicionais</h3>
                        <div className={styles.checkboxContainer}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={tv}
                                    onChange={(e) => handleCheckboxChange(e, setTv)}
                                />
                                TV
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={wifi}
                                    onChange={(e) => handleCheckboxChange(e, setWifi)}
                                />
                                WiFi
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={acessibilidade}
                                    onChange={(e) => handleCheckboxChange(e, setAcessibilidade)}
                                />
                                Acessibilidade
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={estacionamento}
                                    onChange={(e) => handleCheckboxChange(e, setEstacionamento)}
                                />
                                Estacionamento
                            </label>
                        </div>
                        <div>
                            <h3>Adicione imagens para a Galeria</h3>
                            <div className={styles.uploadContainer}>
                                <input type="file" className={styles.arquivo} multiple onChange={handleGalleryFilesChange} />
                                <button type="button" className={styles.upload} onClick={() => handleUpload("GALLERY", selectedGalleryFiles)} disabled={uploading}>
                                    {uploading ? 'Carregando...' : 'Upload'}
                                </button>
                            </div>
                        </div>
                        <div>
                            <h3>Adicione imagens para o Menu</h3>
                            <div className={styles.uploadContainer}>
                                <input type="file" className={styles.arquivo} multiple onChange={handleMenuFilesChange} />
                                <button type="button" className={styles.upload} onClick={() => handleUpload("MENU", selectedMenuFiles)} disabled={uploading}>
                                    {uploading ? 'Carregando...' : 'Upload'}
                                </button>
                            </div>
                        </div>
                        <div>
                            <h3>Adicione imagens para Eventos</h3>
                            <div className={styles.uploadContainer}>
                                <input type="file" className={styles.arquivo} multiple onChange={handleEventFilesChange} />
                                <button type="button" className={styles.upload} onClick={() => handleUpload("EVENTS", selectedEventFiles)} disabled={uploading}>
                                    {uploading ? 'Carregando...' : 'Upload'}
                                </button>
                            </div>
                        </div>
                        <div className={styles["buttons-container-editar"]}>
                            <button type="button" onClick={handleSave}>
                                Salvar
                            </button>
                            <button type="button" onClick={handleCancel}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Editar;

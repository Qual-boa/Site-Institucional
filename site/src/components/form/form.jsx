
import api from "../../api";
import apiBlob from "../../api-blob";
import { toast } from 'react-toastify';
import styles from "./form.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import axios from "axios";


const musics = ['Rock', 'Sertanejo', 'Indie', 'Rap', 'Funk', 'Metal'];
const foods = ['Brasileira', 'Boteco', 'Japonesa', 'Mexicana', 'Churrasco', 'Hamburguer'];
const drinks = ['Cerveja', 'Vinho', 'Chopp', 'Whisky', 'Gim', 'Caipirinha', 'Drinks'];

function Editar() {
    const navigate = useNavigate();
    const id = "123e4567-e89b-12d3-a456-426614174000";
    const [selectedProfileFile, setSelectedProfileFile] = useState(null);
    const [selectedBackgroundFile, setSelectedBackgroundFile] = useState(null);
    const [selectedMenuFile, setSelectedMenuFile] = useState(null);
    const [selectedGalleryFiles, setSelectedGalleryFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
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

    const [selectedMusics, setSelectedMusics] = useState([]);
    const [selectedFoods, setSelectedFoods] = useState([]);
    const [selectedDrinks, setSelectedDrinks] = useState([]);

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
        const [hour] = event.target.value.split(':').map(Number);
        if (timeType === "openAt") {
            setOpenAt({ hour, minute: 0 });
        } else {
            setCloseAt({ hour, minute: 0 });
        }
    };
    
    const handleCheckboxChange = (event, setStateFunction) => {
        setStateFunction(event.target.checked);
    };
    const handleCategoryChange = (event, setStateFunction, currentSelection) => {
        const { value, checked } = event.target;
        if (checked) {
            setStateFunction([...currentSelection, value]);
        } else {
            setStateFunction(currentSelection.filter(item => item !== value));
        }
    };
    const handleProfileFileChange = (event) => {
        setSelectedProfileFile(event.target.files[0]);
    };

    const handleBackgroundFileChange = (event) => {
        setSelectedBackgroundFile(event.target.files[0]);
    };
    const handleGalleryFilesChange = (event) => {
        setSelectedGalleryFiles(event.target.files[0]);
    };

    const handleMenuFilesChange = (event) => {
        setSelectedMenuFile(event.target.files[0]);
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
            await apiBlob.post(`/establishments/${"123e4567-e89b-12d3-a456-426614174000"}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success('Imagem carregada com sucesso!');
        } catch (error) {
            toast.error('Erro ao carregar a imagem. Por favor, tente novamente.');
        } finally {
            setUploading(false);
        }
    };

    const handleSave = async () => {
        const categories = [
            ...selectedDrinks.map((item) => ({ categoryType: 3, category: drinks.indexOf(item) + 1 })),
            ...selectedFoods.map((item) => ({ categoryType: 2, category: foods.indexOf(item) + 1 })),
            ...selectedMusics.map((item) => ({ categoryType: 1, category: musics.indexOf(item) + 1 }))
        ];
        api.get(`/address/establishment/${id}`).then(async (response) => {
            const data  = response.data[0];
            const addressId = data.id;
            try {
                const response = await fetch("https://api-qualaboa.azurewebsites.net/address/" + addressId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify({
                        street: street,
                        number: number,
                        postalCode: postalCode,
                        neighborhood: neighborhood,
                        complement: complement,
                        state: state,
                        city: city
                    })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }

                const data2 = await response.json();
                console.log('Sucesso:', data2);
            } catch (error) {
                console.error('Erro:', error);
            }
        });
        await fetch("https://api-qualaboa.azurewebsites.net/informations/establishment", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hasParking: estacionamento,
                hasAccessibility: acessibilidade,
                hasTv: tv,
                hasWifi: wifi,
                openAt: {
                    hour: 9,
                    minute: 0
                },
                closeAt: {
                    hour: 23,
                    minute: 0
                },
                phone: phone,
                facebookUrl: facebookUrl,
                instagramUrl: instagramUrl,
                setTelegramUrl: setTelegramUrl,
                establishmentId: id
            })
        });
        toast.success('Dados editados com sucesso!');
        navigate("/estabelecimento-usuario");
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
                            onInput={handlePostalCodeChange}
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
                        <div className={styles.timeContainer}>
                            <label>
                                Abre às:
                                <InputMask
                                    mask="99:99"
                                    placeholder="HH:MM"
                                    onChange={(e) => handleTimeChange(e, "openAt")}
                                />
                            </label>
                            <label>
                                Fecha às:
                                <InputMask
                                    mask="99:99"
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
                            <h3>Selecione as categorias de Música</h3>
                           <div className={[styles.checkboxContainer]}> {musics.map((music) => (
                                <div key={music}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={music}
                                            checked={selectedMusics.includes(music)}
                                            onChange={(event) => handleCategoryChange(event, setSelectedMusics, selectedMusics)}
                                        />
                                        {music}
                                    </label>
                                </div>
                            ))}</div>
                        </div>
                        <div>
                        <h3>Selecione as categorias de Comida</h3>
                            <div className={[styles.checkboxContainer]}>                                
                                {foods.map((food) => (
                                    <div key={food}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={food}
                                                checked={selectedFoods.includes(food)}
                                                onChange={(event) => handleCategoryChange(event, setSelectedFoods, selectedFoods)}
                                            />
                                            {food}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3>Selecione as categorias de Bebida</h3>
                            <div className={[styles.checkboxContainer]}>
                            {drinks.map((drink) => (
                                <div key={drink}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={drink}
                                            checked={selectedDrinks.includes(drink)}
                                            onChange={(event) => handleCategoryChange(event, setSelectedDrinks, selectedDrinks)}
                                        />
                                        {drink}
                                    </label>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div>
                        <div>
                            <h3>Insira as imagens do menu do seu estabelecimento</h3>
                            <div className={styles.uploadContainer}>
                                <input type="file" className={styles.arquivo} onChange={handleMenuFilesChange} />
                                <button type="button" className={styles.upload} onClick={() => handleUpload("MENU", selectedMenuFile)} disabled={uploading}>
                                    {uploading ? 'Carregando...' : 'Upload'}
                                </button>
                                </div>
                            </div>
                            <div>
                                <h3>Insira as imagens da galeria do seu estabelecimento</h3>
                                <div className={styles.uploadContainer}>
                                    <input type="file" className={styles.arquivo} onChange={handleGalleryFilesChange} />
                                    <button type="button" className={styles.upload} onClick={() => handleUpload("GALLERY", selectedGalleryFiles)} disabled={uploading}>
                                        {uploading ? 'Carregando...' : 'Upload'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    <div>
                            
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

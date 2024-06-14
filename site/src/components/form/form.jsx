import api from "../../api";
import apiBlob from "../../api-blob";
import { toast } from 'react-toastify';
import styles from "./form.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import axios from "axios";

const musics = ['Rock', 'Sertanejo', 'Indie', 'Rap', 'Funk', 'Metal'];
const foods = ['Brasileira', 'Boteco', 'Japonesa', 'Mexicana', 'Churrasco', 'Hamburguer'];
const drinks = ['Cerveja', 'Vinho', 'Chopp', 'Whisky', 'Gim', 'Caipirinha', 'Drinks'];

function Cadastrar({idEmpresa}) {
    const navigate = useNavigate();
    const id = idEmpresa;
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
    const [openAtTime, setOpenAt] = useState({ hour: 0, minute: 0 });
    const [closeAtTime, setCloseAt] = useState({ hour: 0, minute: 0 });
    
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
                console.log("Error: " + error)
            }
        }
    };

    const handleTimeChange = (event, timeType) => {
        const hour = event.target.value;
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
            await apiBlob.post(`/establishments/${id}/upload`, formData, {
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
            ...selectedDrinks.map((item, index) => ({ categoryType: 3, category: index + 1 })),
            ...selectedFoods.map((item, index) => ({ categoryType: 2, category: index + 1 })),
            ...selectedMusics.map((item, index) => ({ categoryType: 1, category: index + 1 }))
        ];
        try {
            await api.post(`/address/establishment/${id}`, {
                street,
                number,
                postalCode,
                neighborhood,
                complement,
                state,
                city
            });
        } catch (error) {
            console.error('Erro ao atualizar endereço:', error);
        }

        try {
            await api.post('/informations/establishment/' + id, {
                hasParking: estacionamento,
                hasAccessibility: acessibilidade,
                hasTv: tv,
                hasWifi: wifi,
                openAt: openAtTime,
                closeAt: closeAtTime,
                phone,
                facebookUrl,
                instagramUrl,
                setTelegramUrl,
                establishmentId: id
            });

            // Update categories
            await api.put('/establishments/categories', {
                establishmentId: id,
                categories
            });

            toast.success('Dados editados com sucesso!');
            navigate("/estabelecimento-usuario/" + id);
        } catch (error) {
            toast.error('Erro ao salvar as informações. Por favor, tente novamente.');
            console.error('Erro ao salvar as informações:', error);
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
                        <span className={styles["titulo"]}>Cadastrar suas informações:</span>
                        <div>
                            <h3>Insira a logo do seu estabelecimento</h3>
                            <div className={styles.uploadContainer}>
                                <input type="file" className={styles.arquivo} onChange={handleProfileFileChange} required />
                                <button type="button" className={styles.upload} onClick={() => handleUpload("PROFILE", selectedProfileFile)} disabled={uploading}>
                                    {uploading ? 'Carregando...' : 'Upload'}
                                </button>
                            </div>
                        </div>
                        <div>
                            <h3>Insira uma imagem de fundo do seu estabelecimento</h3>
                            <div className={styles.uploadContainer}>
                                <input type="file" className={styles.arquivo} onChange={handleBackgroundFileChange} required />
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
                            required
                        />
                        <InputMask
                            mask="99999-999"
                            value={postalCode}
                            placeholder="CEP"
                            onChange={handlePostalCodeChange}
                            required
                        />
                        <input
                            type="text"
                            value={street}
                            placeholder="Rua"
                            onChange={(e) => handleInputChange(e, setStreet)}
                            required
                        />
                        <input
                            type="text"
                            value={number}
                            placeholder="Número"
                            onChange={(e) => handleInputChange(e, setNumber)}
                            required
                        />
                        <input
                            type="text"
                            value={neighborhood}
                            placeholder="Bairro"
                            onChange={(e) => handleInputChange(e, setNeighborhood)}
                            required
                        />
                        <input
                            type="text"
                            value={complement}
                            placeholder="Complemento"
                            onChange={(e) => handleInputChange(e, setComplement)}
                            required
                        />
                        <input
                            type="text"
                            value={city}
                            placeholder="Cidade"
                            onChange={(e) => handleInputChange(e, setCity)}
                            required
                        />
                        <input
                            type="text"
                            value={state}
                            placeholder="Estado"
                            onChange={(e) => handleInputChange(e, setState)}
                            required
                        />
                        <div className={styles.timeContainer}>
                            <label>
                                Abre às:
                                <InputMask
                                    mask="99"
                                    placeholder="HH"
                                    onChange={(e) => handleTimeChange(e, "openAt")}
                                    required
                                />
                            </label>
                            <label>
                                Fecha às:
                                <InputMask
                                    mask="99"
                                    placeholder="HH"
                                    onChange={(e) => handleTimeChange(e, "closeAt")}
                                    required
                                />
                            </label>
                        </div>
                        <input
                            type="text"
                            value={facebookUrl}
                            placeholder="Facebook"
                            onChange={(e) => handleInputChange(e, setFacebookUrl)}
                            required
                        />
                        <input
                            type="text"
                            value={instagramUrl}
                            placeholder="Instagram URL"
                            onChange={(e) => handleInputChange(e, setInstagramUrl)}
                            required
                        />
                        <input
                            type="text"
                            value={setTelegramUrl}
                            placeholder="Site Oficial"
                            onChange={(e) => handleInputChange(e, setsetTelegramUrl)}
                            required={true}
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
                            <div className={styles.checkboxContainer}>
                                {musics.map((music) => (
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
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3>Selecione as categorias de Comida</h3>
                            <div className={styles.checkboxContainer}>
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
                            <div className={styles.checkboxContainer}>
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

export default Cadastrar;

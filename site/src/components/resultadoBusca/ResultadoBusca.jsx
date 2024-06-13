import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import "../../global.css";
import api from "../../api";
import apiBlob from "../../api-blob";
import styles from "./ResultadoBusca.module.css";
import Multiselect from 'multiselect-react-dropdown';
import { useSearchParams } from 'react-router-dom';

function ResultadoBusca() {

  const [resultados, setResultados] = useState([]);
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(''); // Estado para armazenar o valor do input de busca
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [selectedMusics, setSelectedMusics] = useState([]);

  useEffect(() => {
    const term = searchParams.get('searchTerm');
    if (term) {
      setSearchTerm(term);
    }
  }, [searchParams]);

  const buscarDados = () => {
    api.post("/establishments/listbyfilters", {
      categories,
      name: searchTerm,
    })
      .then((response) => {
        let completeResults; 
        const establishments = response.data;
        const imageRequests = establishments.map(establishment =>
          apiBlob.get(`/establishments/${establishment.id}`).then((response) => {
            const { data } = response;
            const profileImage = data.find(image => image.establishmentCategory === 'PROFILE');
            
            return {
              ...establishment,
              imageUrl: profileImage ? profileImage.imgUrl : 'defaultLogoImage.jpg'
            };
          })
        );

        Promise.all(imageRequests)
          .then(completeResults => { 
            completeResults = completeResults
            toast.success("Dados carregados com sucesso!");
          })
          .catch(() => {
            toast.error("Ocorreu um erro ao carregar as imagens, por favor, tente novamente.");
          });
      })
      .catch(() => {
        toast.error("Ocorreu um erro ao carregar os dados, por favor, tente novamente.");
      });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault(); // Previne o comportamento padrão do formulário
    buscarDados(); // Faz a busca com o termo atualizado
  };

  const setarValoresInput = (e, setter) => {
    setter(e.target.value);
  };

  const musics = ['Rock', 'Sertanejo', 'Indie', 'Rap', 'Funk', 'Metal'];
  const foods = ['Brasileira', 'Boteco', 'Japonesa', 'Mexicana', 'Churrasco', 'Hamburguer'];
  const drinks = ['Cerveja', 'Vinho', 'Chopp', 'Whisky', 'Gim', 'Caipirinha', 'Drinks'];

  const categories = [
    ...selectedDrinks.map((item) => ({ categoryType: 3, category: drinks.indexOf(item) + 1 })),
    ...selectedFoods.map((item) => ({ categoryType: 2, category: foods.indexOf(item) + 1 })),
    ...selectedMusics.map((item) => ({ categoryType: 1, category: musics.indexOf(item) + 1 }))
  ];

  return (
    <div className={styles["containerBusca"]}>
      <div className={styles["search-bar"]}>
        <h3>PROCURE SEU ROLÊ</h3>
        <div className={styles["container-inpu-filtro"]}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setarValoresInput(e, setSearchTerm)}
          placeholder="Pesquise sua boa"
          className={styles["search-input"]}
        />
        <button onClick={handleSubmit} className={styles["search-button"]}>Pesquisar</button>
         </div>
      </div>

      <div className={styles["option-container"]}>
        <div className={styles["option-box"]}>
          <Multiselect
            isObject={false}
            onRemove={(selectedList, removedItem) => setSelectedDrinks(selectedList)}
            onSelect={(selectedList, selectedItem) => setSelectedDrinks(selectedList)}
            options={drinks}
            selectedValues={selectedDrinks}
            className={styles["multiselect-container"]}
            placeholder="Escolha suas bebidas"
          />
        </div>

        <div className={styles["option-box"]}>
          <Multiselect
            isObject={false}
            onRemove={(selectedList, removedItem) => setSelectedFoods(selectedList)}
            onSelect={(selectedList, selectedItem) => setSelectedFoods(selectedList)}
            options={foods}
            selectedValues={selectedFoods}
            className={styles["multiselect-container"]}
            placeholder="Escolha suas comidas"
          />
        </div>

        <div className={styles["option-box"]}>
          <Multiselect
            isObject={false}
            onRemove={(selectedList, removedItem) => setSelectedMusics(selectedList)}
            onSelect={(selectedList, selectedItem) => setSelectedMusics(selectedList)}
            options={musics}
            selectedValues={selectedMusics}
            className={styles["multiselect-container"]}
            placeholder="Escolha suas músicas"
          />
        </div>
      </div>

      <div className={styles.containerJsons}>
        {resultados.length > 0 ? (
          resultados.map((resultado, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={resultado.imageUrl} alt={resultado.name} className={styles.image} />
              </div>
              <div className={styles.details}> 
                <div className={styles.header}>
                  <h2 className={styles.name}>{resultado.fantasyName}</h2>
                  <div className={styles.location}>{resultado.location}</div>
                </div>
                <div className={styles.description}>{resultado.description}</div>
                <div className={styles.additionalInfo}>
                {resultado.information.hasParking && <span>Estacionamento </span>}
                  {resultado.information.hasAccessibility && <span>Acessibilidade </span>}
                  {resultado.information.hasTv && <span>TV </span>}
                  {resultado.information.hasWifi && <span>Wi-Fi </span>} </div>
                <button className={styles.visitButton}>VISITAR</button>
              </div>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default ResultadoBusca;

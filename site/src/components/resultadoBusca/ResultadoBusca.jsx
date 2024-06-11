import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import "../../global.css";
import api from '../../api';
import styles from "./ResultadoBusca.module.css";


// Importe os componentes necessários aqui

function ResultadoBusca() {
  var x = true;
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/habibmhamadi/multi-select-tag@3.0.1/dist/css/multi-select-tag.css';
    document.head.appendChild(link);
  
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/habibmhamadi/multi-select-tag@3.0.1/dist/js/multi-select-tag.js';
    script.async = true;
    script.onload = () => {
      if (window.MultiSelectTag && x) {
        new window.MultiSelectTag('musicas');
        new window.MultiSelectTag('bebidas');
        new window.MultiSelectTag('comidas');
        x = false;
      }
    };
    document.body.appendChild(script);
  
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const [name, setName] = useState(""); // Estado para armazenar o nome
  const [musics, setMusics] = useState([]); // Estado para armazenar a lista de músicas
  const [foods, setFoods] = useState([]); // Estado para armazenar a lista de comidas
  const [drinks, setDrinks] = useState([]); // Estado para armazenar a lista de bebidas
  const [sortOrder, setSortOrder] = useState(""); // Estado para armazenar a ordem de classificação

  const [resultados, setResultados] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o valor do input de busca
  const [suggestions, setSuggestions] = useState([]); // Estado para armazenar sugestões


  const buscarDados = () => {
    // Adiciona o parâmetro de consulta com o termo de busca
    api.post("/establishments/listbyfilters", { 
    })
      .then((response) => {
        setResultados(response.data); // Supondo que a resposta seja um array de objetos dos bares
        toast.success("Dados carregados com sucesso!");
      })
      .catch(() => {
        toast.error("Ocorreu um erro ao carregar os dados, por favor, tente novamente.");
      });
  };
  
  // Função para lidar com a submissão do formulário de busca
  const handleSubmit = (evento) => {
    evento.preventDefault(); // Previne o comportamento padrão do formulário
    buscarDados(); // Faz a busca com o termo atualizado
  };

  // Função para lidar com a mudança de valor do input e definir o termo de busca
  const setarValoresInput = (e, setter) => { 
    setter(e.target.value);
  };

  // Função para lidar com o clique na sugestão
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    buscarDados(); // Faz a busca com o termo atualizado
  };

  // const categorias = ["SERTANEJO", "CASEIRO", "BOTECO", "GOURMET", "ROCK", "AO VIVO", "BALADA"];
  // const primeiraLinha = categorias.slice(0, 4);
  // const segundaLinha = categorias.slice(4);

  return (
    <div className={styles["containerBusca"]}>
      <div className={styles["search-bar"]}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setarValoresInput(e, setSearchTerm)}
          placeholder="Pesquise sua boa"
          className={styles["search-input"]}
        />
        <button onClick={handleSubmit} className={styles["search-button"]}>Pesquisar</button>
      </div>
<div className={styles["option-container"]}>
  <div className={styles["option-box"]}>
    <label htmlFor="comidas">Comida:</label>
    <select id="comidas" value={foods} onChange={(e) => setarValoresInput(e, setFoods)}>
      <option value="pizza">Pizza</option>
      <option value="hamburger">Hamburger</option>
      <option value="sushi">Sushi</option>
    </select>
  </div>

  <div className={styles["option-box"]}>
    <label htmlFor="bebidas">Bebida:</label>
    <select id="bebidas" value={drinks} onChange={(e) => setarValoresInput(e, setDrinks)}>
      <option value="cerveja">Cerveja</option>
      <option value="vinho">Vinho</option>
      <option value="coquetel">Coquetel</option>
    </select>
  </div>

  <div className={styles["option-box"]}>
    <label htmlFor="musicas">Música:</label>
    <select id="musicas" value={musics} onChange={(e) => setarValoresInput(e, setMusics)}>
      <option value="rock">Rock</option>
      <option value="sertanejo">Sertanejo</option>
      <option value="pop">Pop</option>
    </select>
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
                  <span>Estacionamento - Acessibilidade - TV - Wi-fi</span>
                </div>
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

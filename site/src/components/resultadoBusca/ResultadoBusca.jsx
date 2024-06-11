import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import "../../global.css";
import api from '../../api';
import styles from "./ResultadoBusca.module.css";
import Multiselect from 'multiselect-react-dropdown';

function ResultadoBusca() {

  const [name, setName] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // Estado para armazenar a ordem de classificação

  const [resultados, setResultados] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o valor do input de busca
  const [suggestions, setSuggestions] = useState([]); // Estado para armazenar sugestões

  const buscarDados = () => {
    // Adiciona o parâmetro de consulta com o termo de busca
    api.post("/establishments/listbyfilters", {})
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

  const musics = ['Cerveja', 'Vinho'];
  const foods = ['Cerveja', 'Vinho'];
  const drinks = ['Cerveja', 'Vinho'];

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
          <Multiselect
            isObject={false}
            onRemove={function noRefCheck() { }}
            onSelect={function noRefCheck() { }}
            options={drinks}
          />
        </div>

        <div className={styles["option-box"]}>
          <Multiselect
            isObject={false}
            onRemove={function noRefCheck() { }}
            onSelect={function noRefCheck() { }}
            options={foods}
          />
        </div>

        <div className={styles["option-box"]}>
          <Multiselect
            isObject={false}
            onRemove={function noRefCheck() { }}
            onSelect={function noRefCheck() { }}
            options={musics}
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

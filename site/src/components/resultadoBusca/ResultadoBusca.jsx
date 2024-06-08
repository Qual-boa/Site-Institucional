import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import "../../global.css";
import api from '../../api';
import styles from "./ResultadoBusca.module.css";

// Importe os componentes necessários aqui

function ResultadoBusca() {
  const [name, setName] = useState(""); // Estado para armazenar o nome
  const [musics, setMusics] = useState([""]); // Estado para armazenar a lista de músicas
  const [foods, setFoods] = useState([""]); // Estado para armazenar a lista de comidas
  const [drinks, setDrinks] = useState([""]); // Estado para armazenar a lista de bebidas
  const [sortOrder, setSortOrder] = useState(""); // Estado para armazenar a ordem de classificação

  const [resultados, setResultados] = useState([]);
  const [termoBusca, setTermoBusca] = useState(""); // Estado para armazenar o termo de busca
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o valor do input de busca
  const [suggestions, setSuggestions] = useState([]); // Estado para armazenar sugestões

  useEffect(() => {
    // Chamada inicial para buscar todos os dados ou pode ser removida se quiser buscar apenas após submissão
    buscarDados();
  }, []); // O array vazio garante que esta função seja chamada apenas uma vez ao carregar o componente

  const buscarDados = () => {
    // Adiciona o parâmetro de consulta com o termo de busca
    api.get("/establishment/listbyfilters", {
      params: {
        request: { name: name,
        musics: musics [
          "LIVE"
        ],
        foods: [
          foods
        ],
        drinks: [
          "BEER"
        ],
        sortOrder: "string"
        //colocar aqui o endpoint como parametro de busca
          // name: termoBusca
        } // Supondo que 'nome' seja o parâmetro esperado pela sua API
      }
    })
      .then((response) => {
        setResultados(response.data); // Supondo que a resposta seja um array de objetos dos bares
        toast.success("Dados carregados com sucesso!");
      })
      .catch(() => {
        toast.error("Ocorreu um erro ao carregar os dados, por favor, tente novamente.");
      });
  };

  // Função para atualizar o estado com o valor do input
  const handleChange = (evento) => {
    setTermoBusca(evento.target.value);
  };

  // Função para lidar com a submissão do formulário de busca
  const handleSubmit = (evento) => {
    evento.preventDefault(); // Previne o comportamento padrão do formulário
    buscarDados(); // Faz a busca com o termo atualizado
  };

  // Função para lidar com a mudança de valor do input e definir o termo de busca
  const setarValoresInput = (e, setter) => {
    setter(e.target.value);
    // Lógica adicional, se necessário
  };

  // Função para lidar com o clique na sugestão
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    // Lógica adicional, se necessário
  };

  const categorias = ["SERTANEJO", "CASEIRO", "BOTECO", "GOURMET", "ROCK", "AO VIVO", "BALADA"];
  const primeiraLinha = categorias.slice(0, 4);
  const segundaLinha = categorias.slice(4);
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
      <div className={styles["suggestions"]}>
        {primeiraLinha.map((categoria, index) => (
          <button
            key={index}
            className={styles["suggestion-button"]}
            onClick={() => handleSuggestionClick(categoria)}
          >
            + {categoria}
          </button>
        ))}
      </div>
      <div className={styles["suggestions"]}>
        {segundaLinha.map((categoria, index) => (
          <button
            key={index}
            className={styles["suggestion-button"]}
            onClick={() => handleSuggestionClick(categoria)}
          >
            + {categoria}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ResultadoBusca;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const goTo = (caminho) => {
    navigate(caminho);
  }
  return (
    <div style={{ position: 'relative', width: 'fit-content' }}>
      <FontAwesomeIcon
        icon={faSearch}
        style={{
          position: 'absolute',
          left: '8px', // Posição do ícone à esquerda
          top: '50%', // Alinhar verticalmente
          transform: 'translateY(-50%)',
          color: '#000000',
          cursor: 'pointer'
        }}
        onClick={() => goTo("/listagem")}
      />
    </div>
  );
};

export default SearchBar;

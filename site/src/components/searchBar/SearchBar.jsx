import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div style={{ position: 'relative', width: 'fit-content' }}>
      <input
        type="text"
        placeholder="Escreva aqui"
        style={{
          paddingLeft: '30px', // Espaço para o ícone à esquerda
        }}
      />
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
      />
    </div>
  );
};

export default SearchBar;

import React from 'react';

function PokemonList({ pokemon }) {
  return (
    <ul className="pokemon-list">
      {pokemon.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default PokemonList;


import React from 'react';
import Card from './Card';
import './PokemonList.css';

function PokemonList({ pokemonList }) {
  return (
    <div className="pokemon-list">
      {pokemonList.map(pokemon => (
        <Card key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;

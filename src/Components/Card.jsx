import React, { useState } from 'react';
import './Card.css'; 
import Pokemon from './Pokemon';

function Card({ pokemon }) {
  const { name, imageUrl, detailsUrl } = pokemon; 
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleClick}>
      <h2>{name}</h2>
      <div className="card-inner">
        <div className="card-front">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="card-back">
          <Pokemon pokemonUrl={detailsUrl} />
        </div>
      </div>
    </div>
  );
}

export default Card;

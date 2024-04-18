import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pokemon.css';


export default function Pokemon({ pokemonUrl }) { 
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(pokemonUrl); 
        console.log('Response:', response.data); 
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchData();

    return () => {
      setDetails(null);
    };
  }, [pokemonUrl]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detailed-info">
      <p>Type: {details.types.map(type => type.type.name).join(', ')}</p>
      <p>Weight: {details.weight}</p>
      <h3>Stats:</h3>
      <ul>
        {details.stats.map(stat => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}

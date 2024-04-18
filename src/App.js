import React, {useEffect, useState } from 'react';
import PokemonList from './Components/PokemonList';
import axios from 'axios';
import Pagination from './Components/Pagination';


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;

    axios.get(currentPageUrl, { cancelToken: new axios.CancelToken(c => cancel = c) })
      .then(res => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map(p => {
          const id = p.url.split("/")[6]; 
          return {
            name: p.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            detailsUrl: `https://pokeapi.co/api/v2/pokemon/${p.name}`
          };
        }));
      })
      .catch(error => {
        console.error('Error fetching Pokemon data:', error);
        setLoading(false);
      });

    return () => cancel();
  }, [currentPageUrl]);

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...";

  return (
    <>
      <PokemonList pokemonList ={pokemon} />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </>
  );
}
export const currentPageUrl = ()=>{
  return currentPageUrl
}

export default App;

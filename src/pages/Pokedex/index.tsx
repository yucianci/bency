import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import {
  Footer, Main, Navbar, Wrapper,
} from './styles';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import { formatedPokedexNumber } from '../../utils';
import ScrollButton from '../../components/ScroolTop';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`)
      .then((response) => {
        setPokemon(() => [...pokemon, ...response.data.results]);
        setCount(response.data.count);
      })
      .finally(() => setLoading(false));
  }, [page]);

  const pokemonTotal = `${formatedPokedexNumber(page + 20)} / ${count}`;

  return (
    <>
      <Main>
        <Navbar>
          <h3>Pokédex</h3>
          <h3>{pokemonTotal}</h3>
        </Navbar>
        <Wrapper>
          {pokemon.map((item: any) => (
            <Card key={item.name} name={item.name} />
          ))}
        </Wrapper>
        <Footer>
          <Button
            type="button"
            variant="outlined"
            color="primary"
            onClick={() => setPage((previousPage) => previousPage + 20)}
          >
            Carregar mais...
          </Button>
        </Footer>

      </Main>

      <ScrollButton />
      {loading && <Loader />}
    </>
  );
};

export default Pokedex;

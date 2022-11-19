import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { formatedPokedexNumber } from '../../utils';
import { Main, Span, Sprite } from './styles';

interface ICard {
  name: string
}

const Card = ({ name }: ICard) => {
  const [pokemon, setPokemon] = useState<any>();

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${name}`,
      )
      .then((response) => {
        setPokemon(response.data);
      });
  }, []);

  const pokemonDetails = {
    sprite: pokemon?.sprites?.other?.dream_world?.front_default,
    id: pokemon?.id,
    weight: pokemon?.weight,
    height: pokemon?.height,
    type: pokemon?.types[0]?.type?.name,
  };

  return (
    <Main type={pokemonDetails.type}>
      <Span>
        #
        {formatedPokedexNumber(pokemonDetails.id)}

      </Span>
      <h2>{name}</h2>
      <Sprite src={pokemonDetails.sprite} alt="" />
    </Main>
  );
};

export default Card;

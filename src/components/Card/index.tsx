import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { formatedPokedexNumber } from '../../utils';
import { Modal } from '../Modal';
import {
  Footer, Main, Span, Sprite, Type, Wrapper,
} from './styles';

interface ICard {
  name: string;
}

const Card = ({ name }: ICard) => {
  const [pokemon, setPokemon] = useState<any>();
  const [isOpenModal, setIsOpenModal] = useState<any>();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      setPokemon(response.data);
    });
  }, []);

  const pokemonDetails = {
    sprite: pokemon?.sprites?.other?.dream_world?.front_default,
    id: pokemon?.id,
    weight: pokemon?.weight,
    height: pokemon?.height,
    typeA: pokemon?.types[0]?.type?.name,
    typeB: pokemon?.types[1]?.type?.name,
  };

  const weightFormated = (pokemonDetails.weight / 10)
    .toFixed(1)
    .toString()
    .replace('.', ',');

  const heightFormated = (pokemonDetails.height / 10)
    .toFixed(1)
    .toString()
    .replace('.', ',');

  return (
    <>
      <Main type={pokemonDetails.typeA} onClick={() => setIsOpenModal(true)}>
        <Span>
          #
          {formatedPokedexNumber(pokemonDetails.id)}
        </Span>
        <h2>{name}</h2>
        <Sprite src={pokemonDetails.sprite} alt="" />
        <Footer>
          <Type type={pokemonDetails.typeA}>{pokemonDetails.typeA}</Type>
          {pokemonDetails.typeB && (
            <Type type={pokemonDetails.typeB}>{pokemonDetails.typeB}</Type>
          )}
        </Footer>
      </Main>

      <Modal
        title={name}
        modalIsOpen={isOpenModal}
        setModalIsOpen={setIsOpenModal}
      >
        <Wrapper>
          <img src={pokemonDetails.sprite} alt="" />
          <div>
            <span className="type">
              Type:
              {' '}
              {pokemonDetails.typeA}
              {pokemonDetails.typeB ? `, ${pokemonDetails.typeB}` : ''}
            </span>
            <br />
            <br />
            <span>
              Weight:
              {' '}
              {weightFormated}
              {' '}
              kg
            </span>
            <span>
              Height:
              {' '}
              {heightFormated}
              {' '}
              m
            </span>
          </div>
        </Wrapper>
      </Modal>
    </>
  );
};

export default Card;

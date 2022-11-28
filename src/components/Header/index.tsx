import React from 'react';
import { Link } from 'react-router-dom';
import { Main } from './styles';

const Header = () => (
  <Main>
    <Link to="/">PokeBen</Link>
    <a href="/pokedex">Pokédex</a>
  </Main>
);

export default Header;

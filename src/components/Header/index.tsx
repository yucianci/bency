import React from 'react';
import { Link } from 'react-router-dom';
import { Main } from './styles';

const Header = () => (
  <Main>
    <Link to="/">PokeBen</Link>
    <Link to="/pokedex">Pokédex</Link>
  </Main>
);

export default Header;

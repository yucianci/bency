import React from 'react';
import Button from '../Button';
import { Main } from './styles';

const Header = () => (
  <Main>
    <h1>Bency</h1>
    <Button
      variant="outlined"
      // onClick={() => {
      //   setModalIsOpen(true);
      //   methods.reset();
      // }}
    >
      Contato
    </Button>
  </Main>
);

export default Header;

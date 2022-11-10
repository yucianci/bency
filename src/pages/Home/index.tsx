import React, { useState } from 'react';
import {
  Main, ModalBody, Navbar,
} from './styles';
import Modal from '../../components/Modal';
import Button from '../../components/Button';

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <Main>
      <Navbar>
        <h3>Clientes</h3>
        <Button variant="outlined" onClick={() => setModalIsOpen(true)}>
          Cadastrar
        </Button>
        <Modal
          title="Registro de Cliente"
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        >
          <ModalBody>Formulário</ModalBody>
        </Modal>
      </Navbar>
    </Main>
  );
};

export default Home;

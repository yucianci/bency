import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import {
  Main, Content, Navbar, Row, ModalFooter,
} from './styles';
import Button from '../../components/Button';
import { defaultValues } from '../../data';
import TextField from '../../components/TextField';
import { Modal } from '../../components/Modal';

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const methods = useForm({ defaultValues });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    setModalIsOpen(false);
  };

  return (
    <Main>
      <Navbar>
        <h3>Clientes</h3>
        <Button
          variant="outlined"
          onClick={() => {
            setModalIsOpen(true);
            methods.reset();
          }}
        >
          Cadastrar
        </Button>
        <Modal
          title="Registro de Cliente"
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        >
          <Content>
            <form onSubmit={methods.handleSubmit(onSubmit)}>

              <Row container spacing={2}>
                <Grid item sm={9} xs={12}>
                  <TextField
                    name="name"
                    label="Nome completo"
                    required
                    methods={methods}
                  />
                </Grid>

                <Grid item sm={3} xs={12}>
                  <TextField
                    name="age"
                    label="Idade"
                    type="number"
                    methods={methods}
                  />
                </Grid>
              </Row>

              <Row container spacing={2}>
                <Grid item sm={12} xs={12}>
                  <TextField
                    name="email"
                    label="E-mail"
                    required
                    methods={methods}
                  />
                </Grid>
              </Row>
              <ModalFooter>
                <Button variant="outlined" type="submit">
                  Salvar
                </Button>

              </ModalFooter>
            </form>
          </Content>
        </Modal>
      </Navbar>
    </Main>
  );
};

export default Home;

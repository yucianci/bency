/* eslint-disable no-const-assign */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { Send } from '@mui/icons-material';
import axios from 'axios';
import {
  Main, Content, Navbar, Row, ModalFooter, Wrapper,
} from './styles';
import Button from '../../components/Button';
import { defaultValues } from '../../data';
import TextField from '../../components/TextField';
import { Modal } from '../../components/Modal';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import { formatedPokedexNumber } from '../../utils';
import ScrollButton from '../../components/ScroolTop';

const Home = () => {
  const [pokemon, setPokemon] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
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

  const methods = useForm({ defaultValues });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    setModalIsOpen(false);
  };

  const pokemonTotal = `${formatedPokedexNumber(page + 20)} / ${count}`;

  const handleScroll = () => {
    const windowInnerHeight = window.innerHeight;
    const documentScrollTop = document.documentElement.scrollTop;
    const documentScrollHeight = document.documentElement.scrollHeight;

    const isBottomPage = windowInnerHeight + documentScrollTop + 1 > documentScrollHeight;

    if (isBottomPage) {
      setPage((previousPage) => previousPage + 20);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ScrollButton />
      {loading && <Loader />}
      <Main>
        <Navbar>
          <h3>Pokédex</h3>

          <h3>{pokemonTotal}</h3>

          {/* <Button
          variant="outlined"
          onClick={() => {
            setModalIsOpen(true);
            methods.reset();
          }}
        >
          Contato
        </Button> */}
          <Modal
            title="Entre em contato conosco!"
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          >
            <Content>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Row container spacing={2}>
                  <Grid item sm={12} xs={12}>
                    <TextField
                      name="name"
                      label="Nome completo"
                      required
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

                <Row container spacing={2}>
                  <Grid item sm={12} xs={12}>
                    <TextField
                      name="feedback"
                      label="Feedback"
                      multiline
                      required
                      methods={methods}
                    />
                  </Grid>
                </Row>
                <ModalFooter>
                  <Button variant="outlined" type="submit" color="success">
                    Enviar
                    <Send />
                  </Button>
                </ModalFooter>
              </form>
            </Content>
          </Modal>
        </Navbar>

        <Wrapper>
          {pokemon.map((item: any) => (
            <Card key={item.name} name={item.name} />
          ))}
        </Wrapper>
      </Main>
    </>
  );
};

export default Home;

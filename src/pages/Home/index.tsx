import React from 'react';
import {
  Breakline,
  Container,
  Description,
  LargeNotice,
  Main,
  Navbar,
  Notices,
  Strong,
  Title,
} from './styles';
import pikachuPng from '../../assets/img/pikachu.png';

const Home = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  return (
    <>
      <Main>
        <Navbar>
          <h3>Página inicial</h3>
        </Navbar>

        <Notices>
          <Container>
            <Title>Bency Company</Title>
            <Description>
              A empresa nasceu de uma ideia empreendedora dos desenvolvedores
              {' '}
              <Strong>Dennys Bueno</Strong>
              {' '}
              e
              {' '}
              <Strong>Yuri Cianci</Strong>
              , que é basicamente facilitar e deixar mais acessível informações
              sobre algum tema, como por exemplo uma pokédex que contém
              informações de todos os pokémons.
              <br />
              <br />
              A Bency é uma empresa que acredita que o desenvolvimento de
              software é uma arte, que deve ser feita com paixão e dedicação,
              utilizando as tecnologias mais modernas e atingindo os níveis mais
              altos de qualidade.
            </Description>
          </Container>

          <Container>
            <Title>PokeBen</Title>
            <Description>
              A PokeBen foi o primeiro projeto desenvolvido pela
              {' '}
              <Strong>Bency, </Strong>
              {' '}
              e também o primeiro a ser finalizado.
              <br />
              <br />
              A PokeBen é uma mini enciclopédia de pokémons e nela você
              conseguirá ver todos os pokémons existentes e informações
              relevantes sobre eles, de forma elegante e prática!
            </Description>
          </Container>
        </Notices>

        <Breakline />

        <LargeNotice>
          <Title>Pokémon: A História</Title>
          <div>
            <img src={pikachuPng} alt="" />
            <Description>
              Criada por Satoshi Tajiri, a saga de desenhos animados japoneses
              Pokémon (Pocket Monsters ou Monstros de Bolso) foi uma verdadeira
              febre nos anos 90, realidade que resultou na criação de vários
              games e filmes da série. Falando especificamente sobre os jogos da
              mesma, os que mais se destacaram foram os games de RPG feitos para
              a plataforma Game Boy e Game Boy Advance: Pokémon Yellow, Blue,
              Red, SIlver, Gold, Crystal, Ruby e Sapphire.
              <br />
              <br />
              Quando jovem, o criador dos monstrinhos, Satoshi Tajiri, gostava
              bastante de observar e estudar os insetos. Assim, baseado no
              conceito da metamorfose, o japonês idealizou um mundo no qual os
              jogadores batalhavam uns com os outros usando monstros que, com o
              passar do tempo e com os ganhos de experiência, evoluíam e ficavam
              mais poderosos. Foi a partir dessa ideia que nasceu Pokémon, em
              1994.
            </Description>
          </div>
        </LargeNotice>
      </Main>
    </>
  );
};

export default Home;

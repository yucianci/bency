import styled from 'styled-components';
import { pokemonTypes } from '../../data';

interface Props {
  type: any;
}

const handleColorType = (type: 'normal') => pokemonTypes[type]?.color;

const handleColorSaturedType = (type: 'normal') => pokemonTypes[type]?.colorSatured;

export const Main = styled.div<Props>`
  position: relative;
  display: flex;
  height: 300px;
  padding: 8px 120px;
  margin-bottom: 60px;
  width: calc(25% - 40px);
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.3s;

  background: ${(props: any) => handleColorType(props.type)};

  h2 {
    text-transform: capitalize;
    font-size: 1.3rem;
  }

  :hover {
    box-shadow: ${(props: any) => handleColorType(props.type)} 0px 5px 24px 4px;
    cursor: pointer;
  }

  :hover img {
    filter: drop-shadow(0 0 0.3rem #bdbcbc);
    transform: scale(1.1);
  }

  :hover section {
    opacity: 1;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Sprite = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 24px;
  filter: drop-shadow(0 0 0.5rem #272727);
  transition: all 0.3s;
`;

export const Span = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  opacity: 0.5;
`;

export const Footer = styled.footer`
  position: absolute;
  left: 16px;
  bottom: 16px;
  border-radius: 10px;
`;

export const Type = styled.section<Props>`
  color: ${(props: any) => handleColorSaturedType(props.type)};
  font-weight: 700;
  text-transform: capitalize;
  padding: 4px;
  opacity: 0;
  transition: all 0.3s;
  @media (max-width: 800px) {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 32px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 50%;
    opacity: 0.7;

    span {
      display: block;
      text-align: center;
    }
    .type {
      text-transform: capitalize;
    }
  }

  img {
    width: 50%;
    height: 200px;
  }
`;

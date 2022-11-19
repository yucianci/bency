import styled from 'styled-components';
import { pokemonTypes } from '../../data';

interface Props {
  type: any;
}

const handleColorType = (type: 'normal') => pokemonTypes[type]?.color;

export const Main = styled.div<Props>`
  position: relative;
  display: flex;
  height: 300px;
  padding: 8px 120px;
  margin-bottom: 60px;
  width: calc(25% - 40px);
  /* background: #69696983; */
  /* border: 1px solid #ffffff83; */
  /* border-style: dashed; */
  border-radius: 10px;
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

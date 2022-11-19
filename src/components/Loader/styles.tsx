import styled from 'styled-components';

export const Main = styled.div`
  position: fixed;
  z-index: 1000;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #000000c5;
`;

export const Pokeball = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid black;
  animation: frames 0.8s linear 0s infinite;

  :after {
    content: "";
    position: absolute;
    width: 60px;
    height: 30px;
    background-color: red;
    border-bottom: 4px solid black;
    top: -4px;
  }

  :before {
    content: "";
    position: absolute;
    background-color: #fff;
    width: 10px;
    height: 10px;
    border: 4px solid black;
    border-radius: 50%;
    bottom: 18px;
    right: 18px;
    z-index: 1;
  }

  @keyframes frames {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(15deg);
    }
    50% {
      transform: rotate(0);
    }
    75% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`;

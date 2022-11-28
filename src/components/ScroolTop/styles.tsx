import styled from 'styled-components';

export const Content = styled.div`
  overflow-y: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 60px;
  height: 20px;
  font-size: 3.5rem;
  z-index: 1;
  cursor: pointer;
  color: #ce4141;
  opacity: 0.5;
  transition: all 0.3s;

  @media (max-width: 1300px) {
    left: 90%;
  }

  @media (max-width: 1300px) {
    left: 85%;
  }

  :hover {
    opacity: 1;
  }
`;

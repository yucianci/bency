import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px;

  h3 {
    font-weight: normal;
    opacity: 0.5;
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #383838;
  margin: 0 20px;

  h1 {
    font-weight: 500;
    font-size: 1.7rem;
  }

`;

export const ModalBody = styled.div`
  padding: 36px;
`;

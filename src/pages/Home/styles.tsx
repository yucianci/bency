import { Grid } from '@mui/material';
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

export const Content = styled.div`
  padding: 36px;
`;

export const Row = styled(Grid)`
  margin: 24px 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: end;
  padding: 32px 0 0;

  button {
    padding: 8px 18px;
  }
`;

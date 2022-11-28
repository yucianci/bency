import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 140px 48px 0;

  h3 {
    font-weight: normal;
    opacity: 0.5;
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  padding: 0 32px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    padding: 0;
  }
`;

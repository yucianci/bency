import styled from 'styled-components';

export const Main = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
  border-bottom: 1px solid #383838;

  backdrop-filter: blur(10px);

  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  h1 {
    font-size: 1.7rem;
    font-weight: 600;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }
`;

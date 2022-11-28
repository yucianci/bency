import styled from 'styled-components';

export const Main = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid #383838;

  backdrop-filter: blur(6px);

  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  a {
    font-size: 1.7rem;
    font-weight: 600;

    :visited {
      color: #fff;
    }

    :last-child {
      font-size: 1.2rem;
      margin-right: 200px;
      font-weight: 400;
      padding: 6px 16px;
      border-radius: 20px;
      border: 1px solid #fff;
      color: #fff;
      transition: all .3s;

      :hover {
        border-color: #791111;
      }

      @media (max-width: 900px) {
        margin-right: 0;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }
`;

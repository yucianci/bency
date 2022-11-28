import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 140px 48px 0;

  @media (max-width: 900px) {
    padding: 140px 24px 0;
  }

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

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;

  div {
    padding: 40px;
  }

  img {
    width: 500px;
    height: 500px;

    filter: drop-shadow(0 0 0.3rem #757575);

    @media (max-width: 900px) {
      width: 250px;
      height: 250px;
    }
  }
`;

export const Notices = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: block;
  width: 35%;
  margin-top: 40px;
  /* margin-left: 5%; */
  padding: 16px 32px;
  justify-content: center;
  background: #e2e2e2;
  border-radius: 12px;
  transition: all 0.3s;

  @media (max-width: 900px) {
    width: 100%;
  }

  :hover {
    cursor: pointer;
    box-shadow: #535353 0px 5px 24px 4px;
  }
`;

export const Title = styled.h5`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2b2b2b;
  margin: 10px 0;
  font-style: italic;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
  margin: 20px 0;
  font-size: 1rem;
  color: #535353;

  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`;

export const Strong = styled.strong`
  font-weight: 500;
  color: black;
`;

export const LargeNotice = styled.div`
  width: 100%;
  margin: 0 15%;
  margin-bottom: 100px;
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  text-align: center;

  h5 {
    margin-bottom: 60px !important;
  }

  div {
    display: flex;
    align-items: center;

    p {
      margin: 0 50px;
      padding: 32px;
    }
  }

  img {
    width: 30%;
    padding: 20px 40px 60px;
  }

  @media (max-width: 1600px) {
    img {
      width: 40%;
      height: 500px;
      padding: 20px 40px 60px;
    }
  }

  @media (max-width: 1400px) {
    img {
      display: none;
    }
  }

  @media (max-width: 900px) {
    margin: 0;
    margin-bottom: 100px;
    text-align: initial;
    padding: 32px;

    div p {
      margin: 0;
      padding: 4px;
    }
  }

  :hover {
    cursor: pointer;
    box-shadow: #535353 0px 5px 24px 4px;
  }
`;

export const Breakline = styled.hr`
  border: 1px dashed #383838;
  /* border-radius: 100%; */
  width: 100%;
  margin: 120px 25%;
  text-align: center;
`;

import styled from 'styled-components';

export const MainStyled = styled.main`
  margin: 120px 0;
  display: flex;
  justify-content: space-around;
`;

export const WrapperStyled = styled.div`
  width: 40%;
  margin: auto;
  font-family: sans-serif;

  @media (max-width: 2560px) {
    width: 40%;
  }

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 320px) {
    width: 95%;
  }
  
`;
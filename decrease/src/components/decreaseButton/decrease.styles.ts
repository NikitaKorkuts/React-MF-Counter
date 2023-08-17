import styled from 'styled-components';

export const DecreaseButtonStyled = styled.button`
  width: 150px;
  height: 100px;
  font-size: 40px;
  border: 1px solid #E2E3E5;
  background: #fff;
  font-weight: 600;
  -webkit-border-radius: 5%;
  -moz-border-radius: 5%;
  border-radius: 5%;
  transition: all 0.25s ease-in-out;

  &:hover {
    border: 1px solid #5D5FEF;
  }

  &:focus {
    background: #5D5FEF;
    color: #fff;
  }

  @media (max-width: 2560px) {
    font-size: 35px;
    width: 125px;
    height: 85px;
  }

  @media (max-width: 1024px) {
    font-size: 30px;
    width: 100px;
    height: 70px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
    width: 75px;
    height: 55px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
    width: 50px;
    height: 40px;
  }
`;
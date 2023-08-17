import styled from 'styled-components';

export const BackgroundStyled = styled.div`
  width: 100%;
  background: #fff;
  -webkit-box-shadow: 0 5px 9px -5px rgba(34, 60, 80, 0.4);
  -moz-box-shadow: 0 5px 9px -5px rgba(34, 60, 80, 0.4);
  box-shadow: 0 5px 9px -5px rgba(34, 60, 80, 0.4);
  padding: 5px;
  margin: 0 auto 10px auto;
`;

export const CounterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 72px;
  width: calc(100% - 20px);
  padding: 5px 10px;
  font-weight: 800;
  background: #F3F4F6;
  border: none;
  outline: none;
  cursor: inherit;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  font-size: 57px;

  @media (max-width: 2560px) {
    font-size: 47px;
    height: 62px;
  }

  @media (max-width: 1024px) {
    font-size: 37px;
    height: 52px;
  }

  @media (max-width: 768px) {
    font-size: 27px;
    height: 42px;
  }

  @media (max-width: 320px) {
    font-size: 17px;
    height: 32px;
  }
`;


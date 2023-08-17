import React from 'react'
import { useAppSelector } from 'store/store';

import { CounterStyled, BackgroundStyled } from './counter.styles';


export const Counter = () => {
  let { count } = useAppSelector((state) => state.counter);
  return (
    <BackgroundStyled>
      <CounterStyled>
        { count }
      </CounterStyled>
    </BackgroundStyled>
  );
};
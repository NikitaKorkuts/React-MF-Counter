import React, {FC, PropsWithChildren} from 'react';

import { Counter } from '../counter/Counter';

import { MainStyled, WrapperStyled } from './layout.styles'

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <WrapperStyled>
      <header>
        <Counter />
      </header>
      <MainStyled>
        {children}
      </MainStyled>
    </WrapperStyled>
  );
};
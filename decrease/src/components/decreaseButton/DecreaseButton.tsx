import React from 'react';
import { useActions } from 'store/store';

import { DecreaseButtonStyled } from './decrease.styles'

export const DecreaseButton = () => {
  const { decrease } = useActions();

  return (
    <div>
      <DecreaseButtonStyled onClick={() => decrease()}>
        -
      </DecreaseButtonStyled>
    </div>
  );
};

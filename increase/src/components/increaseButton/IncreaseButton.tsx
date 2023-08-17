import React from 'react';
import { useActions } from 'store/store';

import { IncreaseButtonStyled } from './increase.styles'

export const IncreaseButton = () => {
  const { increase } = useActions();

  return (
    <div>
      <IncreaseButtonStyled onClick={() => increase()}>
        +
      </IncreaseButtonStyled>
    </div>
  );
};
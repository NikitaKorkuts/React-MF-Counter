import React from 'react';
import { StoreProvider } from 'store/store';

import { IncreaseButton } from './components/increaseButton/IncreaseButton'

export const App = () => {
  return (
    <StoreProvider>
      <IncreaseButton />
    </StoreProvider>
  );
};
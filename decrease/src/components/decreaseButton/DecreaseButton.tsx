import React from 'react';
import { useActions } from 'store/store';

export const DecreaseButton = () => {
  const { decrease } = useActions();

  return (
    <div>
      <button onClick={() => decrease()}>
        Decrease
      </button>
    </div>
  );
};

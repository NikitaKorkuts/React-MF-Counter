import React from 'react';
import { useActions } from 'store/store';

export const IncreaseButton = () => {
  const { increase } = useActions();

  return (
    <div>
      <button onClick={() => increase()}>
        Increase
      </button>
    </div>
  );
};
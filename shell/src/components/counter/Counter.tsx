import React from 'react'
import { useAppSelector } from 'store/store';

export const Counter = () => {
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div>
      Count: { count }
    </div>
  );
};
import {createSlice} from '@reduxjs/toolkit';

export type CounterInitialStateType = {
  count: number
};

const initialState: CounterInitialStateType = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state: CounterInitialStateType) => {
      state.count += 1;
    },
    decrease: (state: CounterInitialStateType) => {
      state.count -= 1;
    }
  },
});

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
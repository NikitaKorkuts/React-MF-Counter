import React from 'react';
import { TypedUseSelectorHook, Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, bindActionCreators } from '@reduxjs/toolkit';

import {counterActions, counterReducer} from './counter/counter.slice';

type RootStateType = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
});

const actions = {
  ...counterActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}


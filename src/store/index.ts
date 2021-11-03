import todoReducer from '@features/Todo/todoSlice';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

const reducer = {
  todos: todoReducer,
};

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function getStoreWithState(preloadedState?: RootState) {
  return configureStore({ reducer, preloadedState });
}

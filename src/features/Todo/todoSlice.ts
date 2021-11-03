import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

interface Todo {
  id: string;
  text: string;
}

interface TodoState {
  items: Todo[];
  currentTodo: string;
}

const initialState: TodoState = {
  items: [
    { id: nanoid(), text: 'Buy cake' },
    { id: nanoid(), text: 'Pick up kids' },
  ],
  currentTodo: '',
};
const todoSlice = createSlice({
  initialState,
  name: 'todos',
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.items = [...state.items, { id: nanoid(), text: action.payload }];
      state.currentTodo = '';
    },
    onChangeTodo(state, action: PayloadAction<string>) {
      state.currentTodo = action.payload;
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.items = state.items.filter(x => x.id !== action.payload);
    },
  },
});

export const { addTodo, onChangeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

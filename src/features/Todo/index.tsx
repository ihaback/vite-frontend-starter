import React, { useCallback, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '@store';
import Todo from './Todo';
import { addTodo, onChangeTodo, deleteTodo } from './todoSlice';

const TodoContainer = () => {
  const todos = useAppSelector(state => state.todos.items);
  const currentTodo = useAppSelector(state => state.todos.currentTodo);
  const dispatch = useAppDispatch();

  const handleAddTodo = useCallback((e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    dispatch(addTodo(currentTodo));
  }, [dispatch, currentTodo]);

  const handleChangeTodo = useCallback(
    (value: string) => {
      dispatch(onChangeTodo(value));
    },
    [dispatch],
  );

  const handleDeleteTodo = useCallback(
    (id: string) => {
      dispatch(deleteTodo(id));
    },
    [dispatch],
  );

  return (
    <Todo.Card>
      <Todo.Input currentTodo={currentTodo} handleAddTodo={handleAddTodo} handleChangeTodo={handleChangeTodo} />
      <Todo.Container data-testid="todoContainer">
        {todos.map((x, index) => (
          <Todo.Item value={x.text} key={x.id} handleDeleteTodo={() => handleDeleteTodo(x.id)} testId={index} />
        ))}
      </Todo.Container>
    </Todo.Card>
  );
}

export default TodoContainer;

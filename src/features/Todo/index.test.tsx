import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@utils';
import TodoContainer from '.';

test('Should render component', () => {
  renderWithProviders(<TodoContainer />);
});

test('Should render with default state of 2 todo items', () => {
  renderWithProviders(<TodoContainer />);
  expect(screen.getByTestId('todoContainer').children.length).toBe(2);
});

test('Should update input with inputted text', () => {
  renderWithProviders(<TodoContainer />);
  userEvent.type(screen.getByTestId('todoInput'), 'Walk the dog');
  expect(screen.getByTestId('todoInput')).toHaveValue('Walk the dog');
});

test('Should todo list with inputted text', () => {
  renderWithProviders(<TodoContainer />);
  userEvent.type(screen.getByTestId('todoInput'), 'Walkthedog{enter}');
});

test('Should remove item from list on delete icon click', () => {
  renderWithProviders(<TodoContainer />);
  expect(screen.getByTestId('todoContainer').children.length).toBe(2);
  userEvent.click(screen.getByTestId('todoItem-0'));
  expect(screen.getByTestId('todoContainer').children.length).toBe(1);
});

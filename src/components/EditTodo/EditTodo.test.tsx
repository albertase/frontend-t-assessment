import React from 'react';
import { render, screen } from '@testing-library/react';
import EditTodo from './EditTodo';

const mockHandleEditTodo = jest.fn();
const mockCardDisplaySetter = jest.fn();

const todoClicked = {
  userId: 1,
  id: 123,
  title: 'Sample Task',
  completed: false,
  startTime: "",
  endTime: "",
};

test('renders Edit Task component', () => {
  render(
    <EditTodo
      todoClicked={todoClicked}
      handleEditTodo={mockHandleEditTodo}
      cardDisplaySetter={mockCardDisplaySetter}
    />
  );

  expect(screen.getByText('Edit Task')).toBeInTheDocument();

  expect(screen.getByText('Save')).toBeInTheDocument();

  expect(screen.getByText('Cancel')).toBeInTheDocument();
});


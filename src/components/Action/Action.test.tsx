import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Action from './Action';

test('renders the greeting message and handles button click', () => {
  const cardDisplaySetterMock = jest.fn();
  render(<Action cardDisplaySetter={cardDisplaySetterMock} />);
  
  const greetingMessage = screen.getByText(/Good (Morning|Afternoon|Evening)/);
  expect(greetingMessage).toBeInTheDocument();

  const button = screen.getByText('Create New Task');
  fireEvent.click(button);

  expect(cardDisplaySetterMock).toHaveBeenCalledWith('add');
});

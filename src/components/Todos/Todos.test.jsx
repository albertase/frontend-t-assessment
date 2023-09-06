import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Todos from './Todos';

const sampleTodos = [
  {
    id: 1,
    title: 'Task 1',
    startTime: '10:00AM',
    endTime: '11:00AM',
    completed: false,
  },
  {
    id: 2,
    title: 'Task 2',
    startTime: '11:30AM',
    endTime: '12:30PM',
    completed: true,
  },
];

describe('Todos Component', () => {
  it('renders the component with provided todos', () => {
    render(<Todos todos={sampleTodos} />);
    
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('calls the cardClicked and cardDisplaySetter functions when task details are clicked', () => {
    const cardClickedMock = jest.fn();
    const cardDisplaySetterMock = jest.fn();
    render(
      <Todos
        todos={sampleTodos}
        cardClicked={cardClickedMock}
        cardDisplaySetter={cardDisplaySetterMock}
      />
    );

    const taskDetails = screen.getByText('Task 1')
    fireEvent.click(taskDetails);

    expect(cardClickedMock).toHaveBeenCalledWith(sampleTodos[0]);
    expect(cardDisplaySetterMock).toHaveBeenCalledWith('delete');
  });

  it('displays default time if startTime and endTime are not provided', () => {
    render(<Todos todos={sampleTodos} />);
  });
});

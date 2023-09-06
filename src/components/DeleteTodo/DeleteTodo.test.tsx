import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DeleteTodo from "./DeleteTodo";

const mockTodo = {
  userId: 1,
  id: 123,
  title: "Test Task",
  completed: false,
};

const mockHandleDeleteTodo = jest.fn();
const mockCardDisplaySetter = jest.fn();

test("DeleteTodo component renders correctly and calls delete function", () => {
  render(
    <DeleteTodo
      todoClicked={mockTodo}
      handleDeleteTodo={mockHandleDeleteTodo}
      cardDisplaySetter={mockCardDisplaySetter}
    />
  );

  expect(screen.getByText("Test Task")).toBeInTheDocument();

  const deleteButton = screen.getByText("Delete");
  fireEvent.click(deleteButton);

  expect(mockHandleDeleteTodo).toHaveBeenCalledWith(123);

  expect(mockCardDisplaySetter).toHaveBeenCalledWith("calendar");

  const cancelButton = screen.getByAltText("cancel");
  fireEvent.click(cancelButton);

  expect(mockCardDisplaySetter).toHaveBeenCalledWith("calendar");
});

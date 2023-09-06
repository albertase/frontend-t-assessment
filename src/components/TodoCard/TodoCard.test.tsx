import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoCard from "./TodoCard";



describe("TodoCard", () => {
  it("should render the TodoCard component", () => {
    render(<TodoCard handleAddTodo={() => {}} cardDisplaySetter={() => {}} todos={[]} />);

    expect(screen.getByText("Add Task")).toBeInTheDocument();

    expect(screen.getByRole("textbox")).toBeInTheDocument();

    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("should display an error message when trying to submit without a title", () => {
    render(<TodoCard handleAddTodo={() => {}} cardDisplaySetter={() => {}} todos={[]} />);

    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByText("Please type in a todo.")).toBeInTheDocument();
  });
})


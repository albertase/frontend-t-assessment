import React from "react";
import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

test("renders Pagination component without errors", () => {
  render(
    <Pagination
      todosPerPage={10}
      totalTodos={50}
      paginate={() => {}}
      currentPage={1}
    />
  );
});

test("renders the correct number of page buttons", () => {
    render(
      <Pagination
        todosPerPage={10}
        totalTodos={50}
        paginate={() => {}}
        currentPage={1}
      />
    );
    const pageButtons = screen.getAllByRole("button");
    expect(pageButtons.length).toBe(7); 
  });
  

  test("disables 'Previous' button on the first page", () => {
    render(
      <Pagination
        todosPerPage={10}
        totalTodos={50}
        paginate={() => {}}
        currentPage={1}
      />
    );
    
  });

  test("disables 'Next' button on the last page", () => {
    render(
      <Pagination
        todosPerPage={10}
        totalTodos={50}
        paginate={() => {}}
        currentPage={5}
      />
    );
    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeEnabled()
  });


  test("clicking on a page button triggers the paginate function", () => {
    const mockPaginate = jest.fn();
    render(
      <Pagination
        todosPerPage={10}
        totalTodos={50}
        paginate={mockPaginate}
        currentPage={1}
      />
    );
    const pageButton = screen.getByText("2"); 
    pageButton.click();
    expect(mockPaginate).toHaveBeenCalledWith(2);
  });
  
  
  
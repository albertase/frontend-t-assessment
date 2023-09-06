import React from "react";
import "./Pagination.css";
import SEO from "../../SEO";

interface PaginationProps {
  todosPerPage: number;
  totalTodos: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  todosPerPage,
  totalTodos,
  paginate,
  currentPage,
}) => {
  const pageNumbers:number[] = [];
  const maximumPages = 3; 

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    if (pageNumbers.length <= maximumPages * 2 + 1) {
      return pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ));
    } else {
      const startPages = pageNumbers.slice(0, maximumPages);
      const endPages = pageNumbers.slice(-maximumPages);

      return (
        <>
          <SEO
              title="Pagination Todo file of Schoolinka Todo"
              description="This is Schoolinka Todo App File Where There's Logic To Paginate Todo"
              keywords={["todo", "todoapp", "todos"]}
              image="./images/ContentLogo.png"
              url="https://"
          />
          {startPages.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}
          <span className="ellipsis">...</span>
          {endPages.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}
        </>
      );
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src="/images/previous.png" alt="plus-button" />
        <span>Previous</span>
      </button>

      <div className="pagenumbers">{renderPageNumbers()}</div>

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalTodos / todosPerPage)}
      >
        <span>Next</span>
        <img src="/images/next.png" alt="plus-button" />
      </button>
    </div>
  );
};

export default Pagination;
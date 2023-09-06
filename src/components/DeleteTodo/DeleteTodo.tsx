import React from "react";
import "./DeleteTodo.css";
import SEO from "../../SEO";

interface DeleteTodoProps {
  handleDeleteTodo: (id: number) => void;
  cardDisplaySetter: (display: string) => void;
  todoClicked: Todo;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const DeleteTodo: React.FC<DeleteTodoProps> = ({
  todoClicked,
  cardDisplaySetter,
  handleDeleteTodo,
}) => {
  const deleteTodo = () => {
    handleDeleteTodo(todoClicked.id);
    cardDisplaySetter("calendar");
  };

  return (
    <div className="delete-todo">
      <SEO
          title="Delete Todo file of Schoolinka Todo"
          description="This is Schoolinka Todo App File Where There's Logic To Delete Todo"
          keywords={["todo", "todoapp", "todos"]}
          image="./images/ContentLogo.png"
          url="https://schoolinka-albert-todoapp.vercel.app"
      />
      <div className="delete-header">
        <img
          onClick={() => cardDisplaySetter("calendar")}
          src="/images/close.png"
          alt="cancel"
          className="cancel-image"
        />
      </div>
      <div className="task-details">
        <h4>{todoClicked.title}</h4>
        <TodoDetailedLine iconSrc="/images/bluecalendar.png">
          20th January, 2023
        </TodoDetailedLine>
        <TodoDetailedLine iconSrc="/images/blueclock.png">
          8:00 - 10:00 AM
        </TodoDetailedLine>
      </div>
      <div className="action-buttons">
        <button className="cancel" style={{ border: "1px solid gray" }} onClick={deleteTodo}>
          <span>Delete</span>
        </button>
        <button className="active" onClick={() => cardDisplaySetter("edit")}>
          <span>Edit</span>
        </button>
      </div>
    </div>
  );
};

interface TodoDetailedProps {
  iconSrc: string;
  children: React.ReactNode;
}

const TodoDetailedLine: React.FC<TodoDetailedProps> = ({ iconSrc, children }) => (
  <div className="task-details-line">
    <img src={iconSrc} alt="date" />
    <span className="task-timing">{children}</span>
  </div>
);

export default DeleteTodo;

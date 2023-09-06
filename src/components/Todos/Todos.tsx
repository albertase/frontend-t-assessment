import React from "react";
import { Todo } from "../../types";
import "./Todos.css";
import SEO from "../../SEO";



interface TodoProps {
  todos: Todo[];
  onEditTodo: (editedTodo: Todo) => void;
  cardClicked: (dataPassed: Todo) => void;
  onDeleteTodo: (todoId: number) => void;
  todoToggleComplete: (dataPassed: Todo) => void;
  cardDisplaySetter: (dataPassed: string) => void;
}

const Todos: React.FC<TodoProps> = ({
  todoToggleComplete,
  cardClicked,
  todos,
  onEditTodo,
  cardDisplaySetter,
  onDeleteTodo,
}) => {
  const togglecomplete = (data: Todo) => {
    const updatedData = { ...data, completed: !data.completed };
    todoToggleComplete(updatedData);
  };

  const detailsClicked = (todo: Todo) => {
    cardDisplaySetter("delete");
    cardClicked(todo);
  };

  const formatTime = (startTime?: string, endTime?: string) => {
    if (startTime && endTime) {
      return `${startTime} - ${endTime}`;
    }
    return "12:30PM - 1:30PM";
  };

  return (
    <section className="my-todos">
      <SEO
          title="Todo file of Schoolinka Todo"
          description="This is Schoolinka Todo App File Where There's Logic To Populate All Todos"
          keywords={["todo", "todoapp", "todos"]}
          image="./images/ContentLogo.png"
          url="https://"
      />
      <h3>My Task</h3>

      <div className="todolists">
        {todos.map((todo, index) => (
          <div key={todo.id} className="todo-card">
            <div className="card-left">
              <div className="checkbox" onClick={() => togglecomplete(todo)}>
                <img
                  src="/images/tick.png"
                  style={{ display: todo.completed ? "block" : "none" }}
                  alt="Tick"
                />
              </div>

              <div
                className={`task-details ${todo.completed && "marked-class"}`}
                onClick={() => detailsClicked(todo)}
              >
                <h4> {todo.title}</h4>
                <p>{formatTime(todo.startTime, todo.endTime)}</p> 
              </div>
            </div>

            <p>Today</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Todos;

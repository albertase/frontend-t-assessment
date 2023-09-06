import React, { useState, useEffect } from "react";
import "./TodoCard.css";
import SEO from "../../SEO";

interface ActionProps {
  cardDisplaySetter: (dataPassed: string) => void;
  handleAddTodo: (dataPassed: Todo) => void;
  todos: Todo[];
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  startTime: string;
  endTime: string;
}

interface NewTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TodoCard: React.FC<ActionProps> = ({
  handleAddTodo,
  cardDisplaySetter,
  todos,
}) => {
  const [newTodo, setNewTodo] = useState<NewTodo>({
    userId: 300,
    id: 3,
    title: "",
    completed: false,
  });

  const [startTime, setStartTime] = useState<string>("00:00");
  const [endTime, setEndTime] = useState<string>("00:00");
  const [errorMessage, setErrorMessage] = useState<string>("");


useEffect(() => {
  const savedNewTodo = localStorage.getItem("newTodo");
  if (savedNewTodo) {
    setNewTodo(JSON.parse(savedNewTodo));
  }
}, []);

useEffect(() => {
  localStorage.setItem("newTodo", JSON.stringify(newTodo));
}, [newTodo]);


  const getTimePeriod = (time: string): string => {
    const parsedTime = new Date(`1970-01-01T${time}`);
    const hours = parsedTime.getHours();
    return hours >= 12 ? "PM" : "AM";
  };

  const submitNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.title !== "") {
      const todoWithTime = {
        ...newTodo,
        startTime: `${startTime} ${getTimePeriod(startTime)}`,
        endTime: `${endTime} ${getTimePeriod(endTime)}`, 
      };
      handleAddTodo(todoWithTime);
      setNewTodo({ ...newTodo, title: "", id: newTodo.id + 1 });
      setStartTime("00:00");
      setEndTime("00:00");
      setErrorMessage("");
    } else {
      setErrorMessage("Please type in a todo.");
    }
  };

  return (
    <div className="add-todo">
      <SEO
          title="Todo Card file of Schoolinka Todo"
          description="This is Schoolinka Todo App File Where There's Logic To Create Todo"
          keywords={["todo", "todoapp", "todos"]}
          image="./images/ContentLogo.png"
          url="https://"
      />
      <form onSubmit={(e) => submitNewTodo(e)}>
        <div className="todo-header">
          <h4>Add Task</h4>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
          <img
            onClick={() => cardDisplaySetter("calendar")}
            src="/images/close.png"
            alt="cancel"
            className="cancel-image"
          />
        </div>

        <textarea
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        ></textarea>

        <div className="button-wrapper">
          <button>
            <img src="/images/calendar.png" alt="plus-button" />
            <span>Today</span>
          </button>
          <input
            className="starting-time"
            type="time"
            id="starting-time"
            name="starting-time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
          <input
            className="ending-time"
            type="time"
            id="ending-time"
            name="ending-time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>

        <div className="notification">
          <div className="left">
            <img src="/images/bellthick.png" alt="plus-button" />
            <span>10 minutes before</span>
          </div>

          <img src="/images/close.png" alt="plus-button" className="cancel-image" />
        </div>

        <div className="action-buttons">
          <button
            className="cancel"
            style={{ border: "1px solid gray" }}
            onClick={() => cardDisplaySetter("calendar")}
          >
            <span>Cancel</span>
          </button>

          <button className="active" type="submit">
            <span>Add</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoCard;

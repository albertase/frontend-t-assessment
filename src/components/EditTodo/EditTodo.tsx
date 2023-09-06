import React, { useState } from "react";
import { Todo } from "../../types";
import "./EditTodo.css";
import SEO from "../../SEO";

interface ActionProps {
  cardDisplaySetter: (dataPassed: string) => void;
  handleEditTodo: (editedTodo: Todo) => void;
  todoClicked: Todo;
}

interface NewTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  startTime?: string;
  endTime?: string;
}

const EditTodo: React.FC<ActionProps> = ({
  todoClicked,
  handleEditTodo,
  cardDisplaySetter,
}) => {
  const [editedTodo, setEditedTodo] = useState<NewTodo>(todoClicked);
  const [errorMessage, setErrorMessage] = useState<string>("");
  
  

  const [editedStartHour, editedStartMinute] = (editedTodo.startTime || "00:00").split(":");
  const [editedEndHour, editedEndMinute] = (editedTodo.endTime || "00:00").split(":");

  const editedStartPeriod = parseInt(editedStartHour, 10) >= 12 ? "PM" : "AM";
  const editedEndPeriod = parseInt(editedEndHour, 10) >= 12 ? "PM" : "AM";

  const editFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editedTodo.title !== "") {
      handleEditTodo({
        ...editedTodo,
        startTime: `${editedStartHour}:${editedStartMinute} ${editedStartPeriod}`,
        endTime: `${editedEndHour}:${editedEndMinute} ${editedEndPeriod}`,
      });
      cardDisplaySetter("calendar");
      setErrorMessage("");
    } else {
      setErrorMessage("Please type in a todo.");
    }
  };

  return (
    <div className="add-todo">
      <SEO
          title="Edit Todo file of Schoolinka Todo"
          description="This is Schoolinka Todo App File Where There's Logic To Edit Todo"
          keywords={["todo", "todoapp", "todos"]}
          image="./images/ContentLogo.png"
          url="https://"
      />
      <form onSubmit={(e) => editFormSubmit(e)}>
        <div className="todo-header">
          <h4>Edit Task</h4>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <img
            onClick={() => cardDisplaySetter("calendar")}
            src="/images/close.png"
            alt="cancel"
            className="cancel-image"
          />
        </div>

        <textarea
          value={editedTodo.title}
          onChange={(e) => setEditedTodo({ ...editedTodo, title: e.target.value })}
        ></textarea>

        <div className="button-wrapper">
          <button>
            <img src="/images/calendar.png" alt="plus-button" />
            <span>Today</span>
          </button>
          <input
            className="starting-time"
            type="time"
            id="startTime"
            value={editedTodo.startTime || "00:00"}
            onChange={(e) => setEditedTodo({ ...editedTodo, startTime: e.target.value })}
          />

          <input
            className="ending-time"
            type="time"
            id="endTime"
            value={editedTodo.endTime || "00:00"}
            onChange={(e) => setEditedTodo({ ...editedTodo, endTime: e.target.value })}
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
            <span>Save</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;

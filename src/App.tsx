import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Action from "./components/Action/Action";
import WeekNavigation from "./components/WeekNavigation/WeekNavigation";
import Todos from "./components/Todos/Todos";
import Pagination from "./components/Pagination/Pagination";

import TodoCard from "./components/TodoCard/TodoCard"; // Import TodoCard component
import EditTodo from "./components/EditTodo/EditTodo";
import DeleteTodo from "./components/DeleteTodo/DeleteTodo";
import SEO from "./SEO";

import "./App.css";


interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  startTime: string; 
  endTime: string;
}

type ExtraValue = Date | null;

type Value = ExtraValue | [ExtraValue, ExtraValue];

const App: React.FC = () => {
  const [value, onChange] = useState<Value>(new Date());

  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [todosPerPage] = useState<number>(10);
  const [todoClicked, setTodoClicked] = useState<Todo>({
    userId: 0,
    id: 0,
    title: "",
    completed: false,
    startTime: "",
    endTime: "",
  });

  const [cardDisplay, setCardDisplay] = useState<string>("calendar");

  const cardClicked = (data: Todo) => {
    setTodoClicked(data);
  };


  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAddTodo = (newTodo: Todo) => {
    setTodos([newTodo, ...todos]);
    console.log([newTodo, ...todos]);
  };

  const cardDisplaySetter = (dataPassed: string) => {
    setCardDisplay(dataPassed);
  };

  const handleEditTodo = (editedTodo: Todo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editedTodo.id ? editedTodo : todo
    );
    setTodos(updatedTodos);
  };

  const toggleTodoComplete = (editedTodo: Todo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editedTodo.id ? editedTodo : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (todoId: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <SEO
          title="App file of Schoolinka Todo"
          description="This is Schoolinka Todo App Assessment"
          keywords={["todo", "todoapp", "todos"]}
          image="../.."
          url="https://"
      />
      <Navbar />

      <Action cardDisplaySetter={cardDisplaySetter} />

      {cardDisplay === "calendar" && (
        <button
          className="mobile-add-task"
          onClick={() => cardDisplaySetter("add")}
        >
          <span>Input task</span>
          <img src="/images/mic.png" alt="microphone" />
        </button>
      )}

      <aside className="">
        {cardDisplay === "add" && (
          <div className="mobile-aside">
            <TodoCard
              cardDisplaySetter={cardDisplaySetter}
              handleAddTodo={handleAddTodo}
              todos={todos}
            />
          </div>
        )}

        {cardDisplay === "edit" && (
          <div className="mobile-aside">
            <EditTodo
              cardDisplaySetter={cardDisplaySetter}
              handleEditTodo={handleEditTodo}
              todoClicked={todoClicked}
            />
          </div>
        )}

        {cardDisplay === "delete" && (
          <div className="mobile-aside">
            <DeleteTodo
              cardDisplaySetter={cardDisplaySetter}
              todoClicked={todoClicked}
              handleDeleteTodo={handleDeleteTodo}
            />
          </div>
        )}
      </aside>

      <main className="todo-main">
        <section className="section-main-left">
          <WeekNavigation />

          <Todos
            todos={currentTodos}
            onEditTodo={handleEditTodo}
            todoToggleComplete={toggleTodoComplete}
            cardClicked={cardClicked}
            onDeleteTodo={handleDeleteTodo}
            cardDisplaySetter={cardDisplaySetter}
          />
          <hr></hr>
          <Pagination
            todosPerPage={todosPerPage}
            totalTodos={todos.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </section>

        <aside className="large-screen-aside">
          {cardDisplay === "calendar" && (
            <Calendar onChange={onChange} value={value} />
          )}

          {cardDisplay === "add" && (
            <TodoCard
              cardDisplaySetter={cardDisplaySetter}
              handleAddTodo={handleAddTodo}
              todos={todos}
            />
          )}

          {cardDisplay === "edit" && (
            <EditTodo
              cardDisplaySetter={cardDisplaySetter}
              handleEditTodo={handleEditTodo}
              todoClicked={todoClicked}
            />
          )}

          {cardDisplay === "delete" && (
            <DeleteTodo
              cardDisplaySetter={cardDisplaySetter}
              todoClicked={todoClicked}
              handleDeleteTodo={handleDeleteTodo}
            />
          )}
        </aside>
      </main>
    </div>
  );
};

export default App;

import React from 'react';
import './Action.css';
import SEO from "../../SEO";

interface ActionProps {
  cardDisplaySetter: (dataPassed: string) => void;
}

const Action: React.FC<ActionProps> = ({ cardDisplaySetter }) => {
  const currentTime = new Date();
  let greeting = '';
  
  if (currentTime.getHours() < 12) {
    greeting = 'Good Morning';
  } else if (currentTime.getHours() < 16) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  return (
    <section className="action">
      <SEO
          title="Action file of Schoolinka Todo"
          description="This is Schoolinka Todo App Where To Create Todos"
          keywords={["todo", "todoapp", "todos", "action"]}
          image="./ContentLogo"
          url="https://"
      />
      <div className="left">
        <h1>{greeting}</h1>
        <h6>You have some tasks to do</h6>
      </div>

      <div className="right">
        <button onClick={() => cardDisplaySetter('add')}>
          ➕ <span>Create New Task</span>
        </button>
      </div>
    </section>
  );
};

export default Action;

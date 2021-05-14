import React from "react";
import "./App.css";
import Todo from "./components/todo";

const App = () => {
  const todos = [
    {
      id: 1,
      title: "Wash Dishes",
      completed: false,
    },
    {
      id: 2,
      title: "Water the Plants",
      completed: true,
    },
  ];
  return (
    <div className='App'>
      {todos.map(({ id, title, completed }) => (
        <Todo key={id} text={title} id={id} completed={completed} />
      ))}
    </div>
  );
};

export default App;

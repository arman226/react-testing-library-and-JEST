import React from "react";

const Todo = ({ id, text, completed = false }) => {
  const h1 = <h1>{text}</h1>;
  const title = completed ? <strike>{h1}</strike> : h1;

  return <div data-testid={`todo-${id}`}>TASK: {title}</div>;
};

export default Todo;

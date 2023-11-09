import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'

export default function TodoInput(props) {
  let { newTodo, handleTodoTitleChange, handleKeyDownFromTodo } = props;

  const handleKeyDown = (e) => {
    let { key } = e;
    if (key !== "Enter" || newTodo.title === "") return;

    handleKeyDownFromTodo(key);
  };

  const handleChange = (e) => {
    handleTodoTitleChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo.title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}


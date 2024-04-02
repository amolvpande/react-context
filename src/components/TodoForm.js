import React, { useState, useContext } from "react";
import { TodoContext } from "../TodoContext";

const TodoForm = () => {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText === "") {
      setErrorMessage("*Todo text cannot be blank.");
    } else if (trimmedText.includes(" ")) {
      setErrorMessage("*Todo text cannot contain spaces.");
    } else {
      addTodo({
        id: Date.now(),
        text: trimmedText,
      });
      setText("");
      setErrorMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo..."
      />
      <button type="submit">Add</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default TodoForm;

import React, { useState } from "react";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodoText, setEditedTodoText] = useState(todo.text);
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpdate = () => {
    const trimmedText = editedTodoText.trim();
    if (trimmedText === "") {
      setErrorMessage("*Todo text cannot be blank.");
    } else if (trimmedText.includes(" ")) {
      setErrorMessage("Todo text cannot contain only spaces.");
    } else {
      onUpdate(todo.id, { ...todo, text: trimmedText });
      setIsEditing(false);
      setErrorMessage("");
    }
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTodoText}
            onChange={(e) => setEditedTodoText(e.target.value)}
            className="edit-input"
          />
          <button className="update-btn" onClick={handleUpdate}>
            Save
          </button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default TodoItem;

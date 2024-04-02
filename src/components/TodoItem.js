import React, { useState } from "react";
import "../App.css";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodoText, setEditedTodoText] = useState(todo.text);

  const handleUpdate = () => {
    onUpdate(todo.id, { ...todo, text: editedTodoText });
    setIsEditing(false);
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
    </div>
  );
};

export default TodoItem;

import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, updateTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

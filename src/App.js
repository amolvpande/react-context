import React from "react";
import { TodoProvider } from "./TodoContext";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

const App = () => {
  return (
    <TodoProvider>
      <div className="app">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;

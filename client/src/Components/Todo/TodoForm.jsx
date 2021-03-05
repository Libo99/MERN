import React, { useState } from "react";
import "./TodoForm.css";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const Addtodo = (e) => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        text: todo,
        completed: false,
      },
    ]);
  };
  const completeTodo = (i) => {
    const newTodos = [...todos];
    newTodos[i].completed = true;
    setTodos(newTodos);
  };

  const Handlesubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    Addtodo();
    setTodo("");
  };
  return (
    <div className="todo">
      <h1 className="todo-header">You have {todos.length} todos</h1>
      <div className="todo-container">
        <div className="todoform">
          <TodoList todos={todos} completeTodo={completeTodo} />
          <form className="formtodo" onSubmit={Handlesubmit}>
            <label className="todolabel" htmlFor="todo">
              Add todo
            </label>
            <input
              type="text"
              id="todo"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
              className="todoin"
            />
            <button className="todobtn">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;

import React, { useState } from "react";
import "./TodoForm.css";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([{
    text: "Add a todo",
    completed: false
  }]);

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

  const Handlesubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    Addtodo();
    setTodo("");
  };
  return (
    <div className="todo">
      <div className="todo-container">
        <div className="todoform">
          <TodoList todos={todos} />
          <form className="formtodo" onSubmit={Handlesubmit}>
            <label className="todolabel" htmlFor="todo">
              Add todo
            </label>
            <input
              type="text"
              id="todo"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;

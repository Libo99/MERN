import React, { useState } from "react";
import TodoList from "./TodoList";
import styles from './Todo.module.css';

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
  const removeTodo = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  };

  const Handlesubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    Addtodo();
    setTodo("");
  };
  return (
    <div className={styles.todo}>
      <h1 className={styles.todoheader}>You have {todos.length} todos</h1>
      <div className={styles.todocontainer}>
        <div className={styles.todoform}>
          <TodoList
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
          <form className={styles.formtodo} onSubmit={Handlesubmit}>
            <label className={styles.todolabel} htmlFor="todo">
              Add todo
            </label>
            <input
              type="text"
              id="todo"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
              className={styles.todoin}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;

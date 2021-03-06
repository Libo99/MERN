import React from 'react'
import "./TodoList.css";
import styles from "./Todo.module.css";



const TodoList = (props) => {
    const {todos, completeTodo, removeTodo} = props;
    return (
      <div className={styles.listcontainer}>
        <ul className={styles.todolist}>
          {todos.map((todo) => (
            <div className={styles.todos}>
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.completed
                    ? "line-through black solid 3px"
                    : "",
                  color: "black",
                  fontSize: "1.3rem",
                }}
              >
                {todo.text}
              </li>
              <button
                className={styles.todobtn}
                onClick={() => completeTodo(todo.id)}
              >
                Complete
              </button>
              <button
                className={styles.todobtn}
                onClick={() => removeTodo(todo.id)}
              >
                X
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
}

export default TodoList


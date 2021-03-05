import React from 'react'
import "./TodoList.css";


const TodoList = (props) => {
    const {todos, completeTodo} = props;
    return (
      <div className="list-container">
        <ul className="todolist">
          {todos.map((todo) => (
            <div className="todos">
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.completed ? "line-through black solid 3px" : "",
                  color: "black",
                  fontSize: "1.3rem",
                }}
              >
                {todo.text}
              </li>
              <button className="todobtn" onClick={() => completeTodo(todo.id)}>
                Complete
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
}

export default TodoList


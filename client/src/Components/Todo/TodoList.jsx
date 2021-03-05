import React from 'react'
import "./TodoList.css";


const TodoList = (props) => {
    const {todos} = props;
    return (
      <div className="list-container">
        <ul className="todolist">
          {todos.map((todo) => (
            <div className="todos">
              <li 
                key={todo.id}
                style={{ textDecoration: todo.completed ? "line-through" : "", color: 'black', fontSize: '1.3rem' }}
              >
                {todo.text}
              </li>
              <button className="todobtn" onClick={todo.completed = !todo.completed}>completed</button>
            </div>
          ))}
        </ul>
      </div>
    );
}

export default TodoList


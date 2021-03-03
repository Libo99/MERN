import React from 'react'
import "./TodoList.css";


function TodoList(props) {
    const {todos} = props;
    return (
        <div className="list-container">
            <ul className="todolist">
                {todos.map((todo) => 
                    <li className="todos" key={todo.id} style={{textDecoration: todo.completed ? "line-through" : ""}}>{todo.text}</li>
                )}
            </ul>
        </div>
    )
}

export default TodoList


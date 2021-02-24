import React from 'react'
import "./TodoList.css";


function TodoList(props) {
    const {todos} = props;
    return (
        <div className="list-container">
            <ul className="todolist">
                {todos.map((todo) => 
                    <li className="todos" key={todo.id}>{todo.text}</li>
                )}
            </ul>
        </div>
    )
}

export default TodoList


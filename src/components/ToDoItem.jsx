import React, {useState} from "react"



const ToDoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)} className="todoinput"
      />
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className="deletebtn">Delete</button>
    </li>
  );
};

export default ToDoItem;
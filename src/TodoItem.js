// TodoItem.js
import React from "react";

const TodoItem = ({ task, onTaskUpdate, onDeleteTask }) => {
  const handleCheckboxChange = () => {
    onTaskUpdate({ ...task, completed: !task.completed });
  };

  const handleDeleteClick = () => {
    onDeleteTask(task.id);
  };

  return (
    <li style={{ marginBottom: "15px" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <div style={{ marginLeft: "10px" }}>
        <span>{task.text}</span>
        <div style={{ marginTop: "5px" }}>Created on: {task.date}</div>
      </div>
      <button onClick={handleDeleteClick} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

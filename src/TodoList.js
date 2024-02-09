// TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onTaskUpdate, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onTaskUpdate={onTaskUpdate}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;

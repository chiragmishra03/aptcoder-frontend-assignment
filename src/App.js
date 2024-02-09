// App.js
import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const updateTasks = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const addTodo = (newTask) => {
    const updatedTasks = [
      ...tasks,
      { ...newTask, id: tasks.length + 1, date: new Date().toLocaleString() },
    ];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const saveTasks = (updatedTasks) => {
    fetch("http://localhost:3001/tasks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTasks),
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList
        tasks={tasks}
        onTaskUpdate={updateTasks}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};

export default App;

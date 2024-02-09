import React, { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      onAddTodo({ text, completed: false, date: new Date().toLocaleString() });
      setText("");
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleAddTodo}>Add Task</button>
    </div>
  );
};

export default AddTodoForm;

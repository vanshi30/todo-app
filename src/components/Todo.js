import React from "react";
import "../App.css";
const Todo = ({ task, deleteTask, editToggle, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </p>
      <div>
        <i
          class="fa-solid fa-pen-to-square"
          onClick={() => editToggle(task.id)}
        ></i>

        <i class="fa-solid fa-trash" onClick={() => deleteTask(task.id)}></i>
      </div>
    </div>
  );
};

export default Todo;

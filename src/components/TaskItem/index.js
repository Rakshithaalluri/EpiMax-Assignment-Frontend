import React from "react";

import "./index.css";

const TaskItem = ({ task, updateTaskStatus }) => {
  const handleStatusChange = (status) => {
    updateTaskStatus(task.id, status);
  };

  return (
    <li className="task-list-item">
      <h3>{task.taskName}</h3>
      <p>{task.description}</p>
      <p className="deadline">Due Date: {task.dueDate}</p>
      <div className="buttons-container">
        <button className="btn" onClick={() => handleStatusChange("Started")}>
          Start
        </button>
        <button className="btn" onClick={() => handleStatusChange("Completed")}>
          Complete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

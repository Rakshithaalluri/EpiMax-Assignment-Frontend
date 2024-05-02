import React from "react";
import TaskItem from "../TaskItem";
import "./index.css";

const TaskList = ({ tasks, updateTaskStatus }) => {
  return (
    <div className="tasks-container">
      <h2>Task List</h2>
      <ul className="tasks-list-container">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTaskStatus={updateTaskStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

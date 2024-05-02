import React from "react";

const TaskSummary = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.status === "Completed");
  const totalTasks = tasks.length;
  const completionRate = (completedTasks.length / totalTasks) * 100;

  return (
    <div>
      <h2>Task Summary</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks.length}</p>
      <p>Completion Rate: {completionRate.toFixed(2)}%</p>
    </div>
  );
};

export default TaskSummary;

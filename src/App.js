import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskSummary from "./components/TaskSummary";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
  };

  updateTaskStatus = (taskId, status) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      ),
    }));
  };

  render() {
    return (
      <>
        <h1 className="title">Task Management App</h1>
        <div className="App">
          <TaskForm addTask={this.addTask} />
          <TaskSummary tasks={this.state.tasks} />
        </div>
        <div>
          <TaskList
            tasks={this.state.tasks}
            updateTaskStatus={this.updateTaskStatus}
          />
        </div>
      </>
    );
  }
}

export default App;

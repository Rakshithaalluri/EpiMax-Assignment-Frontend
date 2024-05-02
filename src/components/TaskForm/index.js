import React, { Component } from "react";
import "./index.css";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      description: "",
      dueDate: "",
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { taskName, description, dueDate } = this.state;
    if (!taskName || !description || !dueDate) {
      this.setState({ error: "All fields are required" });
      return;
    }
    const task = {
      id: Date.now(),
      taskName,
      description,
      dueDate,
      status: "Pending",
    };
    this.props.addTask(task);
    this.setState({
      taskName: "",
      description: "",
      dueDate: "",
      error: "",
    });
  };

  render() {
    const { taskName, description, dueDate, error } = this.state;
    return (
      <div>
        <h2>Add New Task</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            type="text"
            name="taskName"
            placeholder="Task Name"
            value={taskName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
          />
          <input
            type="date"
            name="dueDate"
            value={dueDate}
            onChange={this.handleChange}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;

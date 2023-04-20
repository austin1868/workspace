import React, { useState } from "react";
import "./TaskManager.css";

function TaskManager() {
  const [taskName, setTaskName] = useState("");
  const [assignee, setAssignee] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      name: taskName,
      assignee,
      deadline
    };

    // Replace this URL with the endpoint for creating a new task in your backend
    const response = await fetch("https://api.example.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskData)
    });

    // Clear form fields after successful submission
    if (response.ok) {
      setTaskName("");
      setAssignee("");
      setDeadline("");
    }
  };

  return (
    <div className="task-manager">
      <h1>Create a new task</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-name">Task Name:</label>
        <input
          type="text"
          id="task-name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />

        <label htmlFor="assignee">Assign to:</label>
        <input
          type="text"
          id="assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          required
        />

        <label htmlFor="deadline">Deadline:</label>
        <input
          type="date"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default TaskManager;

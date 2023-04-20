import React, { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    // Replace this URL with the endpoint for fetching projects from your backend
    const response = await fetch("https://api.example.com/projects");
    const data = await response.json();
    setProjects(data);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Deadline: {new Date(project.deadline).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

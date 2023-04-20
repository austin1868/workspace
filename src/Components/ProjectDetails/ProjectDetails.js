import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetchProjectDetails();
  }, []);

  const fetchProjectDetails = async () => {
    // Replace this URL with the endpoint for fetching project details from your backend
    const response = await fetch(`https://api.example.com/projects/${id}`);
    const data = await response.json();
    setProject(data);
  };

  return (
    <div className="project-details">
      {project ? (
        <>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <p>Deadline: {new Date(project.deadline).toLocaleDateString()}</p>
          {/* Additional project details can be displayed here */}
        </>
      ) : (
        <p>Loading project details...</p>
      )}
    </div>
  );
}

export default ProjectDetails;

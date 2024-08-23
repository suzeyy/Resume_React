import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CV.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  const handleData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/projects");
      console.log(response.data);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="project-section">
      <h3>Projects</h3>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="project-header">
            <h4>{project.name}</h4>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              {project.githubLink}
            </a>
          </div>
          <ul>
            {project.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Projects;

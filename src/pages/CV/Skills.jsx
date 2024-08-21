import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CV.css";

function Skills() {
  const [skills, setSkills] = useState([]);

  const handleData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/skills");
      console.log(response.data);
      setSkills(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="skills-section">
      <h3>Technical Skills</h3>
      {projects.map((skills, index) => (
        <div key={index} className="project-item">
          <div className="project-header">
            <h4>{skills.name}</h4>
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
      
      <div classname="givebor"></div>
    </div>
  );
}

export default Skills;

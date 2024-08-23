import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CV.css";

function Experience() {
  const [experience, setExperience] = useState([]);

  const handleData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/experience");
      console.log(response.data);
      setExperience(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="experience-section">
      <h3>Experience</h3>
      {experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <p className="company">
            <a
              href={exp.companyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {exp.company},
            </a>
            <span className="location"> {exp.location}</span>
          </p>
          <div className="role-duration">
            <p>{exp.role}</p>
            <p>{exp.duration}</p>
          </div>
          <ul style={{marginBottom: "5px"}}>
            {exp.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;

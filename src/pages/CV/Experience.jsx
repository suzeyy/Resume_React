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
      <p className="company">
        <a
          href={experience[0].companyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {experience[0].company}
          {","}
        </a>
        <span className="location">{experience[0].location}</span>
      </p>
      <div className="role-duration">
        <p>{experience[0].role}</p>
        <p>{experience[0].duration}</p>
      </div>

      <ul>
        {experience[0].responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;

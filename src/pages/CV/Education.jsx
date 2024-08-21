import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CV.css";

function Education() {
  const [education, setEducation] = useState([]);

  const handleData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/projects");
      console.log(response.data);
      setEducation(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="education-section">
      <h3>Education</h3>
      <p className="degree">
          {edu[0].degree}
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
      )}
      
      <div classname="givebor"></div>

export default Education;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CV.css";

function Education() {
  const [education, setEducation] = useState([]);

  const handleData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/education");
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
    <>
      <div className="education-section">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div key={index} className="degree">
              <p>
                <strong>{edu.degree}</strong> {edu.year}| {edu.university}
              </p>
              <p>
                <i
                  className="fas fa-calendar-alt"
                  style={{ color: "white", WebkitTextStroke: "1px black" }}
                ></i>
                {edu.duration}
              </p>
            </div>
            <div className="coursework-container">
              <h4>Coursework:</h4>
              <p>{edu.coursework.join(", ")}</p>
            </div>
            <div
              className="database-container"
              style={{ marginBottom: "-10px" }}
            >
              <h4>Database:</h4>
              <p>{edu.database}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Education;

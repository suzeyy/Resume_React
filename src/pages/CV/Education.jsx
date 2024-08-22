import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CV.css";

function Education() {
  const [education, setEducation] = useState([]);

  const handleData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/education"); // Corrected the endpoint
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
      <div className="degree">
        <p>{education[0].degree} | {education[0].university}</p>
        <p><i className="fas fa-calendar-alt" style={{ color: "white", WebkitTextStroke: "1px black" }}></i>{education[0].duration}</p>
      </div>
      <div className="coursework-container">
        <h5>Coursework:</h5>
        <p>{education[0]?.coursework.join(", ")}</p>
      </div>
      {/* <div className="database-container">
        <h5>Database:</h5>
        <p>{education[0]?.database}</p>
      </div> */}

      <div className="givebor"></div>
    </div>
  );
}

export default Education;

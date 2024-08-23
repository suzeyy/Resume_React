import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CV.css";

function Interest() {
  const [interest, setInterest] = useState([]);

  const handleData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/interests");
      console.log(response.data);
      setInterest(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="interest-section">
      <h3>Interests</h3>
      <ul>
        {interest.map((interests, index) => (
          <li key={index}>
            <div>{interests.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Interest;

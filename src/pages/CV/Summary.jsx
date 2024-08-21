import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CV.css';

function Summary() {
  const [summary, setSummary] = useState({});

  const handleData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/professionalSummary"
      );
      console.log(response.data);
      setSummary(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="summary-section">
      <h3>Professional Summary</h3>
      <p>{summary.summary}</p>
    </div>
    
  );
}

export default Summary;
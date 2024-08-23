import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CV.css";

function Certificate() {
  const [certificate, setCertificate] = useState([]);

  const handleData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/certificates");
      console.log(response.data);
      setCertificate(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="certificate-section">
      <h3>Certificates</h3>
      <ul>
        {certificate.map((certificates, index) => (
          <li key={index}>
            <div>{certificates.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certificate;

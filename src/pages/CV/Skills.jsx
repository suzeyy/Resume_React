import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CV.css";

function Skills() {
  const [skills, setSkills] = useState({ technicalSkills: [], softSkills: [] });

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

  const formatCategoryName = (category) => {
    return category
      .replace(/([A-Z])/g, ' $1')  
      .replace(/^./, str => str.toUpperCase());
  };

  return (
    <div className="skills-section">
      <div className="skills-container">
        <div className="technical-skills-container">
          <h3>Technical Skills</h3>
          <div className="technical-skills">
            {skills.technicalSkills.map((skillCategory, index) => (
              <div key={index} style={{marginBottom: "-10px"}}>
                <ul style={{marginTop: "10px"}}>
                  {Object.keys(skillCategory).map((category, subIndex) => (
                    <li key={subIndex}>
                      <strong>{formatCategoryName(category)}: </strong>
                      {skillCategory[category].map((skill, skillIndex) => (
                        <span key={skillIndex}>{skill.name}{skillIndex < skillCategory[category].length - 1 ? ', ' : ''}</span>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="soft-skills-container">
          <h3>Soft Skills</h3>
          <ul style={{marginTop: "10px", marginBottom: "2px"}}>
            {skills.softSkills.map((item, index) => (
              <li key={index} style={{listStyleType: "none", marginLeft: "-15px"}}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;

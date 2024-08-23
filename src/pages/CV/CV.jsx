import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CV.css";
import Profile from "./Profile";
import Summary from "./Summary";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Certificate from "./Certificate";
import Interest from "./Interest";

function CV() {
  return (
    <div className="cv-container">
      <Profile />
      <Summary />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certificate />
      <Interest />
    </div>
  );
}

export default CV;

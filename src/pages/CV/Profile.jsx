import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CV.css";

function Profile() {
  const [profile, setProfile] = useState({});

  const handleData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/profile");
      console.log(response.data);
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="profile-container">
      <h1>{profile.name}</h1>
      <div className="profile-section">
        <p>
          <i className="fas fa-map-marker-alt"></i> {profile.location}
        </p>
        <p>
          <i className="fas fa-envelope"></i>{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p>
          <i className="fas fa-phone"></i> {profile.phone}
        </p>
        <p>
          <i className="fab fa-github"></i>{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            {profile.github}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Profile;

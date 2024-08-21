import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/cv');
  };

  return (
    <div className="home-container">
      <h1>Welcome to Home Page</h1>
      <button onClick={handleButtonClick}>View CV</button>
    </div>
  );
}

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Userstyle.css";

function Mentor() {
  const navigate = useNavigate(); // Initialize navigation

  const handleNavigate = () => {
    navigate("/ask-mentor"); // Redirect to AskMentor page
  };

  return (
    <div className="chat">
      <button className="mentor-button" onClick={handleNavigate}>
        Ask Mentor
        <img src="/Images/mentor.png" alt="Mentor" />
      </button>
    </div>
  );
}

export default Mentor;

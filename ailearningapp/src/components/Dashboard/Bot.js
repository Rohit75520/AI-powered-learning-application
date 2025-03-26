import React from "react";
import { useNavigate } from "react-router-dom";
import "./Userstyle.css";

function Bot() {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <div className="chatbot">
      <img 
        src="/Images/bot1.png" 
        alt="Chatbot" 
        onClick={() => navigate("/chatbot")} // ✅ Navigate to Chatbot page on click
        style={{ cursor: "pointer" }} // 🔹 Make it clear that the image is clickable
      />
    </div>
  );
}

export default Bot;

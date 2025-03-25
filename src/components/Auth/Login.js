import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Loginss.css";

const AuthPage = () => {
  const [role, setRole] = useState("student"); // "student", "teacher", "admin"
  const [isRegister, setIsRegister] = useState(false); // Toggle between Login/Register

  return (
    <div className="auth-container">
      <div className="auth-box">
        {/* Tabs for Role Selection */}
        <div className="tabs">
          <button className={role === "student" ? "active" : ""} onClick={() => setRole("student")}>Student</button>
          <button className={role === "teacher" ? "active" : ""} onClick={() => setRole("teacher")}>Teacher</button>
          <button className={role === "admin" ? "active" : ""} onClick={() => setRole("admin")}>Admin</button>
        </div>

        {/* Title */}
        <h2 className="auth-title">{isRegister ? "Register" : "Login"} as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>

        {/* Form */}
        <form>
          {isRegister && (
            <input type="text" placeholder="Full Name" className="auth-input" required />
          )}
          <input type="email" placeholder="Email" className="auth-input" required />
          <input type="password" placeholder="Password" className="auth-input" required />
          
          {isRegister && role === "student" && (
            <input type="text" placeholder="Course" className="auth-input" required />
          )}
          {isRegister && role === "teacher" && (
            <input type="text" placeholder="Subject Expertise" className="auth-input" required />
          )}
          {isRegister && role === "admin" && (
            <input type="text" placeholder="Admin Code" className="auth-input" required />
          )}

          <button type="submit" className="auth-button">{isRegister ? "Register" : "Login"}</button>
        </form>

        {/* Toggle Login/Register */}
        <p className="auth-footer">
          {isRegister ? "Already have an account?" : "Don't have an account?"} 
          <button className="toggle-button" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;

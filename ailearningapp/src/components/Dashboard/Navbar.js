import React from "react";
import "./Userstyle.css";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation(); // ✅ Use React Router to get current path

  return (
    <div className="container">
      <div className="header">
        <h1 className="logo">
          Innova<span className="ai">AI</span>
        </h1>
        <div className="navlinks">
          <Link
            className={`a ${location.pathname === "/dashboard" ? "active" : ""}`}
            to="/dashboard"
          >
            Home
          </Link>
          <Link
            className={`a ${location.pathname === "/learning" ? "active" : ""}`}
            to="/learning"
          >
            Learning Module
          </Link>
          <Link
            className={`a ${location.pathname === "/assessment" ? "active" : ""}`}
            to="/assessment"
          >
            Assessment
          </Link>
          <Link
            className={`a ${location.pathname === "/analytics" ? "active" : ""}`}
            to="/analytics"
          >
            Analytics
          </Link>
        </div>
        <div class="profile">
        <img src="/Images/Profile.jpg"/>

        </div>
      </div>
    </div>
  );
};

export default Navbar;

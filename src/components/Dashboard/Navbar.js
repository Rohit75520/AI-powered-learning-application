import React from "react";
import "./Userstyle.css";

const Navbar = () => {
  return (
    <div class="container">
      <div class="header">
        <h1 class="logo">
          Innova<span class="ai">AI</span>
        </h1>
        <div class="navlinks">
        <a href="#">
          Home
        </a>
        <a href="#">
          Learning Module
        </a>
        <a href="#">
          Assessment
        </a>
        <a href="#">
          Analytics
        </a>
      </div>
      </div>
 </div>
  );
};

export default Navbar;

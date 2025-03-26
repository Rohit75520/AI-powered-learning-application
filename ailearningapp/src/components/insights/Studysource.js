import React from "react";
import "./CommonStyle.css";

const Studysource = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Study Resources</h1>
      <div className="page-content">
        <p>Access curated study materials to enhance your learning experience.</p>
        
        <h2>Recommended Books</h2>
        <ul>
          <li>React Explained by Zac Gordon</li>
          <li>JavaScript: The Good Parts by Douglas Crockford</li>
          <li>Learning React by Alex Banks and Eve Porcello</li>
        </ul>
        
        <h2>Online Tutorials</h2>
        <ul>
          <li><a href="https://react.dev/">React Official Docs</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN JavaScript Guide</a></li>
          <li><a href="https://www.udemy.com/course/react-the-complete-guide/">React Course on Udemy</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Studysource;

import React from "react";
import "./CommonStyle.css";

const Dynamicquiz = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Dynamic Quiz</h1>
      <div className="page-content">
        <p>Challenge yourself with dynamically generated quizzes tailored to your learning progress.</p>
        
        <h2>Select Quiz Options</h2>
        <label>
          Choose Difficulty: 
          <select>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </label>
        
        <h2>Previous Quiz Scores</h2>
        <ul>
          <li>React Basics: 90%</li>
          <li>JavaScript ES6: 80%</li>
          <li>Async Programming: 75%</li>
        </ul>
      </div>
    </div>
  );
};

export default Dynamicquiz;

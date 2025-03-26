import React from "react";
import "./CommonStyle.css";

const Progress = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Progress Page</h1>
      <div className="page-content">
        <p>Track your learning progress here. Stay motivated by monitoring your achievements.</p>
        
        <h2>Current Progress</h2>
        <ul>
          <li>Lessons Completed: 5/10</li>
          <li>Quizzes Attempted: 3/5</li>
          <li>Average Score: 85%</li>
        </ul>
        
        <h2>Upcoming Lessons</h2>
        <p>Keep up the momentum! Your next lesson is on <b>React State Management</b>.</p>
        
        <h2>Set Your Goals</h2>
        <p>Set weekly learning goals and challenge yourself to stay consistent.</p>
      </div>
    </div>
  );
};

export default Progress;
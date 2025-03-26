import React from "react";
import "./CommonStyle.css";

const Schedule = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Schedule</h1>
      <div className="page-content">
        <p>Plan and schedule your learning sessions effectively.</p>
        
        <h2>Upcoming Lessons</h2>
        <ul>
          <li>React Hooks - Tomorrow at 10:00 AM</li>
          <li>State Management - Friday at 2:00 PM</li>
          <li>Context API - Monday at 4:00 PM</li>
        </ul>
        
        <h2>Set Your Learning Schedule</h2>
        <label>
          Select Date & Time: <input type="datetime-local" />
        </label>
        <button className="schedule-button">Schedule</button>
      </div>
    </div>
  );
};

export default Schedule;

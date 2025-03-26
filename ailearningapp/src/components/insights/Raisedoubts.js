import React from "react";
import "./CommonStyle.css";

const Raisedoubt = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Raise a Doubt</h1>
      <div className="page-content">
        <p>Have a question? Raise your doubts and get them resolved by experts.</p>
        
        <h2>Submit Your Doubt</h2>
        <textarea placeholder="Describe your doubt here..."></textarea>
        <button className="submit-button">Submit</button>
        
        <h2>Previously Asked Questions</h2>
        <ul>
          <li>What is the difference between props and state in React?</li>
          <li>How does useEffect work with dependencies?</li>
          <li>What are React fragments used for?</li>
        </ul>
      </div>
    </div>
  );
};

export default Raisedoubt;

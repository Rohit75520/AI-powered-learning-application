import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Userstyle.css";

const Cards = () => {
  const navigate = useNavigate();

  return (
    <div className="insights">
      <div className="expence">
        <h1>Lessons</h1>
        <div className="middle">
          <div className="left">
            <img src="/Images/lessons.png" alt="lesson" />
          </div>
        </div>
        <small className="text-muted">
          <button onClick={() => navigate('/lesson')}>Take lessons</button>
        </small>
      </div>

      <div className="expence">
        <h1>Dynamic Quiz</h1>
        <div className="middle">
          <div className="left">
            <img src="/Images/quiz.jpeg" className="quiz" alt="quiz" />
          </div>
        </div>
        <small className="text-muted">
          <button onClick={() => navigate('/dynamic-quiz')}>Take the Quiz</button>
        </small>
      </div>

      <div className="expence">
        <h1>Study Source</h1>
        <div className="middle">
          <div className="left">
            <img src="/Images/studysource.jpeg" alt="study source" />
          </div>
        </div>
        <small className="text-muted">
          <button onClick={() => navigate('/study-source')}>Get it</button>
        </small>
      </div>

      <div className="expence">
        <h1>Schedule</h1>
        <div className="middle">
          <div className="left">
            <img src="/Images/schedule.jpeg" alt="schedule" />
          </div>
        </div>
        <small className="text-muted">
          <button onClick={() => navigate('/schedule')}>Go</button>
        </small>
      </div>

      <div className="expence">
        <h1>Progress</h1>
        <div className="middle">
          <div className="left">
            <img src="/Images/progress.jpeg" alt="progress" />
          </div>
        </div>
        <small className="text-muted">
          <button onClick={() => navigate('/progress')}>View</button>
        </small>
      </div>

      <div className="income">
        <h1>Raise Doubts</h1>
        <div className="middle">
          <div className="left">
            <img src="/Images/doubt.jpeg" alt="raise doubt" />
          </div>
        </div>
        <small className="text-muted">
          <button onClick={() => navigate('/raise-doubt')}>Raise</button>
        </small>
      </div>
    </div>
  );
};

export default Cards;

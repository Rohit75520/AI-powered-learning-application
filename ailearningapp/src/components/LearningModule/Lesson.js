import React, { useState } from 'react';

const Lesson = ({ title, content }) => {
  const [completed, setCompleted] = useState(false);

  const markAsComplete = () => setCompleted(true);

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={markAsComplete}>
        {completed ? 'Completed' : 'Mark as Complete'}
      </button>
    </div>
  );
};

export default Lesson;
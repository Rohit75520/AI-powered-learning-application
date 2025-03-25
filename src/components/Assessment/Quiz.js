import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    { question: 'What is React?', answer: 'A JavaScript library for building UIs' },
    { question: 'What is JSX?', answer: 'JavaScript XML' },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (userAnswer) => {
    if (userAnswer === questions[index].answer) {
      setScore(score + 1);
    }
    setIndex(index + 1);
  };

  if (index === questions.length) return <h2>Your Score: {score}</h2>;

  return (
    <div>
      <h3>{questions[index].question}</h3>
      <button onClick={() => handleAnswer('A JavaScript library for building UIs')}>Option 1</button>
      <button onClick={() => handleAnswer('JavaScript XML')}>Option 2</button>
    </div>
  );
};

export default Quiz;
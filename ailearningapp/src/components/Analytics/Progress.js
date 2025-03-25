import React from 'react';
import { Bar } from 'react-chartjs-2';

const Progress = () => {
  const data = {
    labels: ['Math', 'Science', 'English'],
    datasets: [
      {
        label: 'Performance',
        data: [80, 60, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={data} />;
};

export default Progress;
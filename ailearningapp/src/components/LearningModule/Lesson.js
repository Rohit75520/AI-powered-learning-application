import React, { useState } from 'react';

const lessons = [
  {
    category: "Programming",
    videos: [
      { title: "Intro to Python", url: "https://www.youtube.com/embed/rfscVS0vtbw" },
      { title: "JavaScript Basics", url: "https://www.youtube.com/embed/W6NZfCO5SIk" },
    ],
  },
  {
    category: "Mathematics",
    videos: [
      { title: "Algebra for Beginners", url: "https://www.youtube.com/embed/3XyToI7nhXg" },
      { title: "Calculus Basics", url: "https://www.youtube.com/embed/WUvTyaaNkzM" },
    ],
  },
  {
    category: "Physics",
    videos: [
      { title: "Newton's Laws of Motion", url: "https://www.youtube.com/embed/kKKM8Y-u7ds" },
      { title: "Quantum Mechanics Explained", url: "https://www.youtube.com/embed/p7bzE1E5PMY" },
    ],
  },
];

const Lesson = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Lesson Videos</h1>
      <div className="space-y-8">
        {lessons.map((lesson, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{lesson.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lesson.videos.map((video, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="250"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                  <p className="text-center mt-2 font-medium">{video.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lesson;

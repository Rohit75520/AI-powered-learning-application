import React, { useState } from 'react';
import "./Lessons.css";

const courses = {
  '8-10': ['Tamil', 'English', 'Maths', 'Science', 'Social Science'],
  '11-12': ['Tamil', 'English', 'Maths', 'Physics', 'Chemistry', 'Botany', 'Zoology', 'Computer Science'],
  'College': ['Programming', 'Java', 'Python', 'Data Science', 'Machine Learning', 'Cyber Security', 'Artificial Intelligence', 'Other Department Courses']
};

const videos = {
  'Tamil': ['https://www.youtube.com/embed/TAMIL_VIDEO_1', 'https://www.youtube.com/embed/TAMIL_VIDEO_2'],
  'Science': ['https://www.youtube.com/embed/SCIENCE_VIDEO_1', 'https://www.youtube.com/embed/SCIENCE_VIDEO_2'],
  'Social Science': ['https://www.youtube.com/embed/SOCIAL_VIDEO_1', 'https://www.youtube.com/embed/SOCIAL_VIDEO_2'],
  'Maths': ['https://www.youtube.com/embed/1jVZ8Aysn9w', 'https://www.youtube.com/embed/2KJ7w9f3sbI', 'https://www.youtube.com/embed/mX2TiMlF8ng'],
  'Physics': ['https://www.youtube.com/embed/QxZ-uBnPeSI', 'https://www.youtube.com/embed/dwUQG6hNHwU', 'https://www.youtube.com/embed/FSyAehMdpyI'],
  'Chemistry': ['https://www.youtube.com/embed/5TQF_gBdT3M', 'https://www.youtube.com/embed/wVyggTKDcOE', 'https://www.youtube.com/embed/7F8wpb6XUVo'],
  'Botany': ['https://www.youtube.com/embed/XcJ6n3xAUKo', 'https://www.youtube.com/embed/5MgBikgcWnY'],
  'Zoology': ['https://www.youtube.com/embed/xsdT_Gb7h4w', 'https://www.youtube.com/embed/9Cl_f5FAiWA'],
  'Computer Science': ['https://www.youtube.com/embed/25bA0blR0zw', 'https://www.youtube.com/embed/HZ5tOdnCwFE'],
  'Programming': ['https://www.youtube.com/embed/PkZNo7MFNFg', 'https://www.youtube.com/embed/8aGhZQkoFbQ', 'https://www.youtube.com/embed/SBmn3XQon6E'],
  'Java': ['https://www.youtube.com/embed/eIrMbAQSU34', 'https://www.youtube.com/embed/grEKMHGYyns'],
  'Python': ['https://www.youtube.com/embed/rfscVS0vtbw', 'https://www.youtube.com/embed/WGJJIrtnfpk'],
  'Data Science': ['https://www.youtube.com/embed/X3paOmcrTjQ', 'https://www.youtube.com/embed/rHIkrotSwcc'],
  'Machine Learning': ['https://www.youtube.com/embed/GwIo3gDZCVQ', 'https://www.youtube.com/embed/6gUHhXz25Q0'],
  'Cyber Security': ['https://www.youtube.com/embed/3Kq1MIfTWCE', 'https://www.youtube.com/embed/pjW9wzDux00'],
  'Artificial Intelligence': ['https://www.youtube.com/embed/2ePf9rue1Ao', 'https://www.youtube.com/embed/8A7kxXvLCyM']
};

const Lesson = () => {
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Educational Lessons</h1>
      
      <div className="selection-box">
        <label>Select Grade:</label>
        <select onChange={(e) => setSelectedGrade(e.target.value)}>
          <option value="">Select Grade</option>
          <option value="8-10">Grade 8-10</option>
          <option value="11-12">Grade 11-12</option>
          <option value="College">College</option>
        </select>
      </div>
      
      {selectedGrade && (
        <div className="selection-box">
          <label>Select Course:</label>
          <select onChange={(e) => setSelectedCourse(e.target.value)}>
            <option value="">Select Course</option>
            {courses[selectedGrade].map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>
      )}
      
      {selectedCourse && videos[selectedCourse] && (
        <div className="lesson-grid">
          {videos[selectedCourse].map((video, index) => (
            <div key={index} className="lesson-card">
              <div className="video-box">
                <iframe src={video} title={selectedCourse} allowFullScreen></iframe>
              </div>
              <p className="video-title">{selectedCourse} Lesson</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lesson;
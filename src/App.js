import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Auth/Login';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Lesson from './components/LearningModule/Lesson';
import Quiz from './components/Assessment/Quiz';
// import Progress from './components/Analytics/Progress';
import Chatbot from './components/Chatbot/Chatbot';
import Navbar from './components/Dashboard/Navbar';
import UserDashboard from './components/Dashboard/UserDashboard';
import Login from './components/Auth/Login'

const App = () => (
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/learning" element={<Lesson title="React Basics" content="React is a library..." />} />
      <Route path="/assessment" element={<Quiz />} />
      {/* <Route path="/analytics" element={<Progress />} /> */}
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  </Router>
);

export default App;
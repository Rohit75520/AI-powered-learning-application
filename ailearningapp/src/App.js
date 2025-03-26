import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Dashboard/Navbar";
import AuthPage from "./components/Auth/AuthPage"; 
import UserDashboard from "./components/Dashboard/UserDashboard";
import Lesson from "./components/LearningModule/Lesson";
import Quiz from "./components/Assessment/Quiz";
import AskMentor from "./components/AskMentor/AskMentor";
import Chatbot from "./components/Chatbot/Chatbot";
import Dynamicquiz from "./components/insights/Dynamicquiz";
import Schedule from "./components/insights/Schedule";
import Progress from "./components/insights/Progress";
import Raisedoubt from "./components/insights/Raisedoubts";
import Studysource from "./components/insights/Studysource";

const Layout = () => {
  const location = useLocation(); // Get current path

  const hideNavbarPaths = ["/"]; // Paths where Navbar should be hidden
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />} {/* Show Navbar only if not in the login page */}
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/learning" element={<Lesson title="React Basics" content="React is a library..." />} />
        <Route path="/assessment" element={<Quiz />} />
        <Route path="/ask-mentor" element={<AskMentor />} />
        <Route path="/analytics" element={<div>Analytics Page</div>} />
        <Route path="/chatbot" element={<Chatbot />} />

        <Route path="/lesson" element={<Lesson />} />
        <Route path="/dynamic-quiz" element={<Dynamicquiz />} />
        <Route path="/study-source" element={<Studysource />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/raise-doubt" element={<Raisedoubt />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;

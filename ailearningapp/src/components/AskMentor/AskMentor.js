import React, { useState } from "react";
import "./AskMentor.css"; // Import CSS

const AskMentor = () => {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("General");
  const [responses, setResponses] = useState([]);

  const getMentorResponse = (userQuestion, selectedCategory) => {
    const defaultResponses = {
      "General": "That's a great question! Let me find the best answer for you.",
      "Web Development": "For web dev, check MDN docs: https://developer.mozilla.org/",
      "AI & Machine Learning": "AI is a vast field. Start with Python libraries like TensorFlow.",
      "Databases": "SQL and NoSQL databases have different use cases. What are you working on?"
    };
    return defaultResponses[selectedCategory] || "I'll get back to you on that!";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const newResponse = {
      category,
      user: question,
      mentor: getMentorResponse(question, category),
    };

    setResponses([...responses, newResponse]);
    setQuestion("");
  };

  return (
    <div className="ask-mentor-container">
      <h2>Ask a Mentor</h2>
      
      <form onSubmit={handleSubmit} className="ask-mentor-form">
        {/* Category Dropdown */}
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="category-select">
          <option value="General">General</option>
          <option value="Web Development">Web Development</option>
          <option value="AI & Machine Learning">AI & Machine Learning</option>
          <option value="Databases">Databases</option>
        </select>

        {/* Question Input */}
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          className="question-input"
        />

        {/* Submit Button */}
        <button type="submit" className="submit-button">Ask</button>
      </form>

      {/* Mentor Responses */}
      <div className="responses">
        {responses.map((res, index) => (
          <div key={index} className="response">
            <p><strong>Category:</strong> {res.category}</p>
            <p><strong>You:</strong> {res.user}</p>
            <p><strong>Mentor:</strong> {res.mentor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AskMentor;

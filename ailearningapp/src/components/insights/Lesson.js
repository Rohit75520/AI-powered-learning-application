import React from "react";
import "./CommonStyle.css";

const Lesson = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Lesson Page</h1>
      <div className="page-content">
        <p>Welcome to the lesson module. In this section, you will find detailed lessons on various topics.</p>
        <h2>Introduction to React</h2>
        <p>React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage state efficiently.</p>
        <h3>Key Concepts:</h3>
        <ul>
          <li>Components: The building blocks of React applications.</li>
          <li>State and Props: Manage and pass data dynamically.</li>
          <li>Hooks: Enable functional components to use state and other React features.</li>
          <li>Virtual DOM: Enhances performance by updating only the necessary parts of the UI.</li>
        </ul>
        <h2>Getting Started with React</h2>
        <p>To start using React, install it using:</p>
        <pre><code>npx create-react-app my-app</code></pre>
        <p>Then, navigate to your project folder and run:</p>
        <pre><code>cd my-app
npm start</code></pre>
      </div>
    </div>
  );
};

export default Lesson;

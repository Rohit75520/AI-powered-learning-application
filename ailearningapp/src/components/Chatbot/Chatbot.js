import React, { useState } from "react";
import "./Chatbot.css"; // Ensure this file is styled properly

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");

  const fetchAIResponse = async (userMessage) => {
    const API_URL = "https://api.deepseek.com/v1/chat";
    const API_KEY = "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"; // Replace with actual key

    const payload = {
      model :"deepseek/deepseek-r1:free",
      messages: [{ role: "user", content: userMessage }],
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content || "I'm not sure how to respond.";
    } catch (error) {
      console.error("Error fetching response:", error);
      return "Sorry, something went wrong.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    const botResponse = await fetchAIResponse(input);
    setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-box">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="chat-input"
          />
          <button onClick={handleSend} className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    const botReply = message.includes('help') ? 'I am here to help!' : 'Keep learning!';
    setMessages([...messages, { user: message, bot: botReply }]);
  };

  return (
    <div>
      <h3>Chatbot</h3>
      <input onKeyDown={(e) => e.key === 'Enter' && sendMessage(e.target.value)} placeholder="Ask me anything..." />
      {messages.map((m, i) => (
        <div key={i}>
          <p>User: {m.user}</p>
          <p>Bot: {m.bot}</p>
        </div>
      ))}
    </div>
  );
};

export default Chatbot;
import React, { useState } from 'react';

export const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // implement logic 
    console.log('Email:', email);
    console.log('Content:', content);

    setEmail('');
    setContent('');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};


import React, { useState } from 'react';
import '../CompStyles/ContactForm.css';

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

    console.log('Email:', email);
    console.log('Content:', content);

    setEmail('');
    setContent('');
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h2>Contact Us!</h2>
        <form onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              required
            />
          </div>
          <div className="contact-form-button-container">
            <button className="contact-form-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

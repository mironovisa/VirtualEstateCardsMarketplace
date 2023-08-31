import React from 'react';
import '../CompStyles/FormStyle.css';
import { useSignUp } from 'Hooks';

const Signup = ({ showSignupModal }) => {

  const { handleChange, handleSubmit, signUpData, error } = useSignUp();

  return (
    <div className={showSignupModal ? 'modal-overlay' : 'modal-hidden'}>
      <div className="modal-container">
        <div className="modal-header">
          <span>Signup</span>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input 
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
                value={signUpData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
               value={signUpData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="your username"
                value={signUpData.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="signupEmail"
                name='email'
                placeholder="Enter email"
                value={signUpData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="signupPassword"
                name="password"
                placeholder="Enter password"
                value={signUpData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                value={signUpData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            {/*error && <div className='errors'>{error}</div>*/}
            <div className="modal-footer">
              <button type="submit" className="login-btn">
                Signup
              </button>
              {error && <div className="errors">{error.msg}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;



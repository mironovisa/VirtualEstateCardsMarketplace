import React from 'react';
import Signup from '../../Components/SignupForm';

const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-text">
        <span className='intro-title'>Welcome to our Signup Page</span>
        <p className='intro-text'>Sign up to access exclusive features and content.</p>
      </div>
      <div className="signup-form">
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
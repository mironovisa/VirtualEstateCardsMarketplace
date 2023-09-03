import React, { useState, useEffect } from 'react';
import Login from '../Components/LoginForm';
import Signup from '../Components/SignupForm';
import { useNavigate } from 'react-router-dom';
import '../Styles/SigninModal.css';

const SigninModal = ({ activeComponent, setModalComponent }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isPoppedOut, setPoppedOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeComponent === 'signup') {
      setShowSignup(true);
      setShowLogin(false);
    } else if (activeComponent === 'login') {
      setShowSignup(false);
      setShowLogin(true);
    } else {
      // If neither 'signup' nor 'login' is specified, default to 'login'
      setShowSignup(false);
      setShowLogin(true);
      setModalComponent('login'); // Update the parent component
    }
  }, [activeComponent, setModalComponent]);

  const toggleSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
    setModalComponent('signup');
  };

  const toggleLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
    setModalComponent('login');
  };

  const handleCloseModal = () => {
    navigate('/about');
    setModalComponent(null);
    setPoppedOut(true);
  };

  useEffect(() => {
    if (!showSignup && !showLogin) {
      setModalComponent(null);
    }
  }, [showSignup, showLogin, setModalComponent]);

  return (
    <div className='signup-modal-container'>
      <div className={`signup-modal ${isPoppedOut ? 'popout' : ''} ${showLogin ? 'login-active' : ''}`}>
        <div className="top-modal">
            <li><a className='top-btn left' onClick={toggleSignup}> Signup </a></li>
            <li><a className='top-btn right' onClick={toggleLogin}> Login </a></li>
        </div>
        <div className="bottom-modal">
          {showSignup && <Signup />}
          {showLogin && <Login />}
        </div>
        <button className='close-btn' onClick={handleCloseModal}> Close </button>
      </div>
    </div>
  );
};

export default SigninModal;
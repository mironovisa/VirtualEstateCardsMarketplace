
/*import React from 'react';
import '../Styles/LandingPage.css';


const SigninModal = () => {
    return (
        <div>
            <h1>signup</h1>
        </div>
    )
}

export default SigninModal;*/


//////////////



import React, { useState, useEffect } from 'react';
import Login from '../../Components/LoginForm';
import Signup from '../../Components/SignupForm';
import { useNavigate } from 'react-router-dom';
import '../../Styles/SigninModal.css';

const SigninModal = ({ activeComponent, setModalComponent}) => {
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
    }
  }, [activeComponent]);

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
    <div className='modal-container'>
    <div className={`signupModal ${isPoppedOut ? 'popout' : ''} ${showLogin ? 'loginActive' : ''}`}>
        <div className="topModal">
        <button className='topBtn left' onClick={toggleSignup}> Signup </button>
        <button className='topBtn right' onClick={toggleLogin}> Login </button>
      </div>
      <div className="bottomModal">
        {showSignup && <Signup />}
        {showLogin && <Login />}
      </div>
      <button className='closeBtn' onClick={handleCloseModal}> Close </button>
    </div>
    </div>
  );
};

export default SigninModal;



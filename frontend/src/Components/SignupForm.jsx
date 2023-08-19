import React from 'react';
import '../CompStyles/FormStyle.css';

const Signup = ({ showSignupModal }) => {

  return (
    <div className={showSignupModal ? 'modal-overlay' : 'modal-hidden'}>
      <div className="modalContainer">
        <div className="modalHeader">
          <span>Signup</span>
        </div>
        <div className="modalBody">
          <form /*onSubmit={handleFormSubmit}*/>
            <div className="formGroup">
              <label htmlFor="firstName">First Name:</label>
              <input 
                type="text"
                id="firstName"
                placeholder="Enter first name"
                /*value={firstName}
                onChange={(e) => setFirstName(e.target.value)}*/
              />
            </div>
            <div className="formGroup">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter last name"
               /* value={lastName}
                onChange={(e) => setLastName(e.target.value)}*/
              />
            </div>
            <div className="formGroup">
              <label htmlFor="phoneNumber">Username:</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="your username"
                /*value={username}
                onChange={(e) => setUsername(e.target.value)}*/
              />
            </div>
            <div className="formGroup">
              <label htmlFor="signupEmail">Email</label>
              <input
                type="email"
                id="signupEmail"
                placeholder="Enter email"
                /*value={email}
                onChange={(e) => setEmail(e.target.value)}*/
              />
            </div>
            <div className="formGroup">
              <label htmlFor="signupPassword">Password:</label>
              <input
                type="password"
                id="signupPassword"
                placeholder="Enter password"
                /*value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}*/
              />
            </div>
            <div className="formGroup">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm password"
                /*value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}*/
              />
            </div>
            {/*error && <div className='errors'>{error}</div>*/}
            <div className="modalFooter">
              <button type="submit" className="btnSign">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;



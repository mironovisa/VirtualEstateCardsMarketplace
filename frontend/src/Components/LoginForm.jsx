import React from 'react';
import '../CompStyles/FormStyle.css';

const Login = ({ showLoginModal }) => {

  return (
    <div className={showLoginModal ? 'modal-overlay' : 'modal-hidden'}>
      <div className="modalContainer">
        <div className="modalHeader">
          <span>Login</span>
        </div>
        <div className="modalBody">
          <form /*onSubmit={handleFormSubmit}*/>
            <div className="formGroup">
              <label htmlFor="loginEmail">Email address:</label>
              <input
                type="email"
                id="loginEmail"
                placeholder="Enter email"
                /*value={email}
                onChange={(e) => setEmail(e.target.value)}*/
              />
            </div>
            <div className="formGroup">
              <label htmlFor="loginPassword">Password:</label>
              <input
                type="password"
                id="loginPassword"
                placeholder="Enter password"
                /*value={password}
                onChange={(e) => setPassword(e.target.value)}*/
              />
            </div>
            {/*error && <div className="errors">{error}</div>*/}
            <div className="modalFooter">
              <button type="submit" className="btnSign">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;







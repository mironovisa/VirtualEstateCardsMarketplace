import React from 'react';
import '../CompStyles/FormStyle.css';

const Login = ({ showLoginModal }) => {

  return (
    <div className={showLoginModal ? 'modal-overlay' : 'modal-hidden'}>
      <div className="modal-container">
        <div className="modal-header">
          <span>Login</span>
        </div>
        <div className="modal-body">
          <form /*onSubmit={handleFormSubmit}*/>
            <div className="form-group">
              <label htmlFor="loginEmail">Email address:</label>
              <input
                type="email"
                id="loginEmail"
                placeholder="Enter email"
                /*value={email}
                onChange={(e) => setEmail(e.target.value)}*/
              />
            </div>
            <div className="form-group">
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
            <div className="modal-footer">
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







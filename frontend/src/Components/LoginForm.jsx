import React from 'react';
import '../CompStyles/FormStyle.css';
import { useLogin } from 'Hooks';

const Login = ({ showLoginModal }) => {

  const { loginData, handleChange, handleSubmit, error } = useLogin();

  return (
    <div className={showLoginModal ? 'modal-overlay' : 'modal-hidden'}>
      <div className="modal-container">
        <div className="modal-header">
          <span className='signup-title'>Login</span>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                id="loginEmail"
                name="email"
                placeholder="Enter email"
                value={loginData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="loginPassword"
                name="password"
                placeholder="Enter password"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>
            {error && <div className="errors">{error.msg}</div>}
            <div className="modal-footer">
              <button type="submit" className="login-btn">
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







import React from 'react';
import '../CompStyles/FormStyle.css';
import { useLogin } from 'Hooks';

const Login = ({ showLoginModal }) => {

  const { loginData, handleChange, handleSubmit } = useLogin();

  return (
    <div className={showLoginModal ? 'modal-overlay' : 'modal-hidden'}>
      <div className="modalContainer">
        <div className="modalHeader">
          <span>Login</span>
        </div>
        <div className="modalBody">
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
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
            <div className="formGroup">
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







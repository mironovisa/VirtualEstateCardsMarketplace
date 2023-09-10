import React from 'react';
import '../CompStyles/UpdateUserCont.css';
import { useProfileUpdate } from 'Hooks';
import LoadingSpinner from './LoadingSpinner';

const UpdateUserForm = () => {
  const { updatedUserData, handleChange, handleSubmit, isLoading } = useProfileUpdate();

  return (
    <div className='update-user-form-container'>
      <h2>Update User Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={updatedUserData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={updatedUserData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={updatedUserData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={updatedUserData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={updatedUserData.password}
            onChange={handleChange}
            placeholder="Enter your new password"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={updatedUserData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your new password"
            required
          />
        </div>
        {isLoading ? <LoadingSpinner></LoadingSpinner> : null}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
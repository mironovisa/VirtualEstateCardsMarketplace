import React from 'react';
import { usePopupMessage } from '../Context/PopupMessageContext';
import '../CompStyles/UserCard.css'
import { usersApi } from 'helpers/Api';

const UserCard = ({ username, firstName, lastName, isAdmin, id}) => {
  const { showPopupMessage } = usePopupMessage();

  const handleUserDelete = (id) => {
    usersApi.deleteUser(id)
    .then((res)=>{
      console.log('user deleted succesfully');
      showPopupMessage(`user: ${username} deleted succesfully.`);
    })
    .catch((err)=>{
      console.log(err);
      showPopupMessage('Failed deleting user.');

    })
  }

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const firstNameCap = capitalizeFirstLetter(firstName);
  const lastNameCap = capitalizeFirstLetter(lastName);

  return (
    <div className="user-card">
      <span className='name'>{firstNameCap} {lastNameCap}</span>
      <p className="user-username">{username}</p>
      <button className='delete-user-btn' onClick={() => handleUserDelete(id)}>Delete User</button>
    </div>
  );
};

export default UserCard;
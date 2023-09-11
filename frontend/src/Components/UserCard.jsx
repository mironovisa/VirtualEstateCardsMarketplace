import React from 'react';
import '../CompStyles/UserCard.css'
import { usersApi } from 'helpers/Api';

const UserCard = ({ username, imageSrc, timeStamp, firstName, lastName, isAdmin, id}) => {

  const handleUserDelete = (id) => {
    usersApi.deleteUser(id)
    .then((res)=>{
      
    })
    .catch((err)=>{
      
    })
  }
  return (
    <div className="user-card">
      {/* <img src={imageSrc} alt={`${username}'s profile`} className="user-image" /> */}
      <h3 className="user-username">{username}</h3>
      <h3>{firstName}</h3>
      <h3>{lastName}</h3>
      <h3>{isAdmin}</h3>
      <p className="user-time">Ranking: {timeStamp}</p>
      <button onClick={() => handleUserDelete(id)}>Delete User</button>
    </div>
  );
};

export default UserCard;
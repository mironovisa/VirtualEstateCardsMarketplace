/*import React from 'react';
import '../CompStyles/UserCard.css'
import { usersApi } from 'helpers/Api';

const UserCard = ({ username, imageSrc, timeStamp, firstName, lastName, isAdmin, id}) => {

  const handleUserDelete = (id) => {
    usersApi.deleteUser(id)
    .then((res)=>{
      console.log('user deleted succesfully');
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className="user-card">
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

*/
import React from 'react';
import '../CompStyles/UserCard.css'
import { usersApi } from 'helpers/Api';

const UserCard = ({ username, firstName, lastName, isAdmin, id}) => {

  const handleUserDelete = (id) => {
    usersApi.deleteUser(id)
    .then((res)=>{
      console.log('user deleted succesfully');
    })
    .catch((err)=>{
      console.log(err);
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
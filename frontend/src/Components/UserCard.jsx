import React from 'react';
import '../CompStyles/UserCard.css'

const UserCard = ({ username, imageSrc, timeStamp }) => {
  return (
    <div className="user-card">
      <img src={imageSrc} alt={`${username}'s profile`} className="user-image" />
      <h3 className="user-username">{username}</h3>
      <p className="user-time">Ranking: {timeStamp}</p>
    </div>
  );
};

export default UserCard;
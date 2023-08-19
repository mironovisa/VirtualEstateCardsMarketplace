import React from 'react';

const UserCard = ({ username, imageSrc, ranking }) => {
  return (
    <div className="user-card">
      <img src={imageSrc} alt={`${username}'s profile`} className="user-image" />
      <h3 className="user-username">{username}</h3>
      <p className="user-ranking">Ranking: {ranking}</p>
    </div>
  );
};

export default UserCard;
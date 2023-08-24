/*import React from 'react';
import '../../StylesKit/VerticalList.css'; 

const TopUsers = () => {
  const users = Array.from({ length: 6 }); 

  return (
    <div className="vertical-list">
      {users.map((user, index) => (
        <div key={index} className="user-card">
          <h3>Top Users Card {index + 1}</h3>
          <p>User details...</p>
        </div>
      ))}
    </div>
  );
};

export default TopUsers;*/



import React from 'react';
import UserCard from '../../Components/UserCard'; 


const topUsersData = [
  { id: 1, username: 'user1', imageSrc: 'user1.jpg', ranking: 'Gold' },
  { id: 2, username: 'user2', imageSrc: 'user2.jpg', ranking: 'Silver' },
  { id: 3, username: 'user2', imageSrc: 'user2.jpg', ranking: 'Silver' },
  { id: 4, username: 'user2', imageSrc: 'user2.jpg', ranking: 'Silver' },
  { id: 5, username: 'user2', imageSrc: 'user2.jpg', ranking: 'Silver' },
  { id: 6, username: 'user2', imageSrc: 'user2.jpg', ranking: 'Silver' },
  
];

const TopUsers = () => {
  return (
      <div className="horizontal-list">
        {topUsersData.map((user) => (
          <UserCard
            key={user.id}
            username={user.username}
            imageSrc={user.imageSrc}
            ranking={user.ranking}
          />
        ))}
      </div>
  );
};

export default TopUsers;
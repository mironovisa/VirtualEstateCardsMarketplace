import React from 'react';
import UserCard from '../../Components/UserCard';
import '../../StylesKit/CardList.css'

const sampleUsers = [
  {
    id: 1,
    username: 'User1',
    imageSrc: 'url-to-user1-image',
    timeStamp: 'Ranking 1',
  },
  {
    id: 2,
    username: 'User2',
    imageSrc: 'url-to-user2-image',
    timeStamp: 'Ranking 2',
  },
  {
    id: 3,
    username: 'User3',
    imageSrc: 'url-to-user2-image',
    timeStamp: 'Ranking 2',
  },
  {
    id: 4,
    username: 'User4',
    imageSrc: 'url-to-user2-image',
    timeStamp: 'Ranking 2',
  },
];

const AllUsers = () => {
  return (
    <div className="card-list">
      {sampleUsers.map((user) => (
        <UserCard
          key={user.id}
          username={user.username}
          imageSrc={user.imageSrc}
          timeStamp={user.timeStamp}
        />
      ))}
    </div>
  );
};

export default AllUsers;




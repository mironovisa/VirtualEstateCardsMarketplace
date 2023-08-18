import React from 'react';
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

export default TopUsers;
import React, { useEffect, useState } from "react";
import UserCard from "../../Components/UserCard";
import "../../StylesKit/CardList.css";
import { usersApi } from "helpers/Api";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    usersApi
      .getAllUsers()
      .then((res) => {
        setUsers(res);
        console.log(res);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="card-list">
      {users.map((user) => (
        <UserCard
          key={user._id}
          firstName={user.firstName}
          lastName={user.lastName}
          isAdmin={user.isAdmin}
          username={user.username}
          id={user._id}
        />
      ))}
    </div>
  );
};

export default AllUsers;

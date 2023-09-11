import React, { useEffect, useState } from "react";
import UserCard from "../../Components/UserCard";
import "../../StylesKit/CardList.css";
import { usersApi } from "helpers/Api";
import LoadingSpinner from "Components/LoadingSpinner";

const AllUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    setIsLoading(true);
    usersApi
      .getAllUsers()
      .then((res) => {
        setUsers(res);
        setIsLoading(false);
        
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="card-list">
      {isLoading ? <LoadingSpinner></LoadingSpinner> : null}
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

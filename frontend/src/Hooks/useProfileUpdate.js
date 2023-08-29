import { getStorageUser } from "Auth/storage";
import { usersApi } from "helpers/Api";
import { useState } from "react";

export const useProfileUpdate = () => {
  const [updatedUserData, setUpdatedUserData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData((prevUpdatedUserData) => ({
      ...prevUpdatedUserData,
      [name]: value
    }));
  };

  console.log(updatedUserData);

  //* import loggedUserID form cookies and pass in the function
  const handleProfileUpdate = () => {
    usersApi.updateUser(getStorageUser(), updatedUserData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleProfileUpdate();
  };

  const values = {
    updatedUserData, setUpdatedUserData, handleChange, handleSubmit
  }

  return values;
};

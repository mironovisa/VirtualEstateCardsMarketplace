import { usersApi } from "helpers/Api";
import { useState } from "react";

export const useProfileUpdate = () => {
  const [updatedUserData, setUpdatedUserData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData((prevUpdatedUserData) => ({
      ...prevUpdatedUserData,
      [name]: value
    }));
  };

  //* import loggedUserID form cookies and pass in the function
  const handleProfileUpdate = () => {
    delete updatedUserData.confirmPassword;
    usersApi.updateUser("loggedUserId", updatedUserData)
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

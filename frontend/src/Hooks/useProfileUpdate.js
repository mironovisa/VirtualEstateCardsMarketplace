import { getStorageUser } from "Auth/storage";
import { usersApi } from "helpers/Api";
import { useState } from "react";
import { validateInput } from "../Utils/regexValidation";

export const useProfileUpdate = () => {
  const [updatedUserData, setUpdatedUserData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const regexPatterns = {
    firstName: /^[A-Za-z]+$/,
    lastName: /^[A-Za-z]+$/,
    username: /^[A-Za-z0-9_]+$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    password: /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\-]+$/,
  };

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
    const isValid = validateInput(updatedUserData, regexPatterns);
    if (isValid) handleProfileUpdate();
  };

  const values = {
    updatedUserData, setUpdatedUserData, handleChange, handleSubmit
  }

  return values;
};

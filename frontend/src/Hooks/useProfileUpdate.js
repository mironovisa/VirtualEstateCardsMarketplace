import { getUserFromCookie } from '../helpers/cookieManager';
import { usersApi } from "helpers/Api";
import { useState } from "react";
import { validateInput } from "../Utils/regexValidation";

export const useProfileUpdate = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [updatedUserData, setUpdatedUserData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAdmin: false
  });
  const regexPatterns = {
    firstName: /^[A-Za-z]+$/,
    lastName: /^[A-Za-z]+$/,
    username: /^[A-Za-z0-9_]+$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    password: /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\-]+$/,
    confirmPassword: /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\-]+$/,
    isAdmin: /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\-]+$/,
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
    setIsLoading(true)

    usersApi.updateUser(updatedUserData)
      .then((res) => {
        console.log(res);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      })

      
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateInput(updatedUserData, regexPatterns);
    if (isValid) handleProfileUpdate();
  };

  const values = {
    updatedUserData, setUpdatedUserData, handleChange, handleSubmit, isLoading
  }

  return values;
};

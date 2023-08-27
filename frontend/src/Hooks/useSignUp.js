import { usersApi } from "helpers/Api";
import { useState } from "react";

export const useSignUp = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignUp = () => {
    usersApi.addNewUser(signUpData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevSignUpData) => ({
      ...prevSignUpData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  const values = {
    signUpData, setSignUpData, handleSignUp, handleChange, handleSubmit
  }

  return values;
}
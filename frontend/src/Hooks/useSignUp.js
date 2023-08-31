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

  const [error, setError] = useState([]);

  const handleSignUp = () => {
    usersApi.addNewUser(signUpData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError({ msg: err.response.data, error: true });
      });
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
    signUpData, setSignUpData, handleSignUp, handleChange, handleSubmit, error
  }

  return values;
}
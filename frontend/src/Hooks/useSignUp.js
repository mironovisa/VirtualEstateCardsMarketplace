import { usersApi } from "helpers/Api";
import { useState } from "react";
import { validateInput } from "../Utils/regexValidation";

export const useSignUp = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const regexPatterns = {
    firstName: /^[A-Za-z]+$/,
    lastName: /^[A-Za-z]+$/,
    username: /^[A-Za-z0-9_]+$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    password: /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\-]+$/,
    confirmPassword: /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\-]+$/,
  };

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
    const isValid = validateInput(signUpData, regexPatterns);
    if (isValid) handleSignUp();
  };

  const values = {
    signUpData, setSignUpData, handleSignUp, handleChange, handleSubmit, error
  }

  return values;
}
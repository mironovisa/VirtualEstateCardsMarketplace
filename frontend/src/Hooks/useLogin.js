import { authApi } from "helpers/Api";
import { useState } from "react";

export const useLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    authApi.login(loginData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const values = {
    loginData, setLoginData, handleChange, handleSubmit
  };

  return values;
};
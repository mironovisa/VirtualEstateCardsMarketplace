import { authApi } from "helpers/Api";
import { useState, useContext } from "react";
import { authContext } from "Auth/authContext";


export const useLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const { login } = useContext(authContext);

  const handleLogin = () => {
    authApi.login(loginData)
      .then((res) => {
        console.log(res);
        login(res.userid, res.access_token)

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
import { authApi } from "helpers/Api";
import { useState, useContext } from "react";
import { authContext } from "Auth/authContext";


export const useLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState([]);

  const { login } = useContext(authContext);

  const handleLogin = () => {
    authApi.login(loginData)
      .then((res) => {
        console.log(res);
        login(res.userid, res.access_token)

      })
      .catch((err) => {
        setError({ msg: err.response.data, error: true });
      });
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
    loginData, setLoginData, handleChange, handleSubmit, error
  };

  return values;
};
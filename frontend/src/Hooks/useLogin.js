import { authApi } from "helpers/Api";
import { useState, useContext } from "react";
import { authContext } from "Auth/authContext";
import { validateInput } from "../Utils/regexValidation";
const { loginUser, loginAdmin } = useContext(authContext);


export const useLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const regexPatterns = {
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    password: /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\-]+$/,
  };

  const [error, setError] = useState([]);


  const handleLogin = () => {
    authApi.login(loginData)
      .then((res) => {
        console.log(res);
        loginUser(res.access_token)
        checkIfUserIsAdmin();
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
    const isValid = validateInput(loginData, regexPatterns);
    if (isValid) handleLogin();
  };

  const checkIfUserIsAdmin = async () => {
        // Add a backend route to check if user is admin or not and return a boolean value to set the state of isAdmin to true or false.
        loginAdmin();
  }

  const values = {
    loginData, setLoginData, handleChange, handleSubmit, error
  };

  return values;
};
import { usersApi } from "helpers/Api";
import { useState } from "react";
import { validateInput } from "../Utils/regexValidation";
import { usePopupMessage } from '../Context/PopupMessageContext';

export const useSignUp = () => {
  const { showPopupMessage } = usePopupMessage();
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
    console.log(signUpData);
    usersApi.addNewUser(signUpData)
      .then((res) => {
        console.log(res);
        showPopupMessage(`${signUpData.username} Successfully signed up!`);
      })
      .catch((err) => {
        setError(err.response.data);
        showPopupMessage(`ERROR: ${err.response.data}`);
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
    else showPopupMessage(`ERROR: Please fill in all the fields correctly!`);
  };

  const values = {
    signUpData, setSignUpData, handleSignUp, handleChange, handleSubmit, error
  }

  return values;
}
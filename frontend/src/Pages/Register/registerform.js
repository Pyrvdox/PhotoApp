import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import client from "../../utils/api";

const RegisterForm = () => {
  
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    password2:""
  })

  const registerFormHandler = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(registerData)
      const resp = await client.post('api/register/',{
          username: registerData.username,
          password: registerData.password
      }) 
        console.log('Udana rejestracja!');
        navigate("/")
    }
    catch (error){
      console.error('Error:', error);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
      <h1>Email</h1>
        <input
          type="text"
          id="username"
          name="username"
          value={registerData.username}
          onChange={registerFormHandler}
        />
      </div>
      <div>
      <h1>Password</h1>
        <input
          type="password"
          id="password"
          name="password"
          value={registerData.password}
          onChange={registerFormHandler}
        />
      </div>
      <div>
      <h1>Confirm Password</h1>
        <input
          type="password"
          id="password2"
          name="password2"
          value={registerData.password2}
          onChange={registerFormHandler}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default RegisterForm;

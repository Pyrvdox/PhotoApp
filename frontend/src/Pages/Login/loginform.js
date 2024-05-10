import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../../utils/api';

const LoginForm = () => {
  
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const loginFormHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Login data:', loginData);
      const resp = await client.post("api/login/",
        {
          username: loginData.username,
          password: loginData.password
        }
      );
      if (resp.status === 200) { 
        console.log('Udane logowanie!');
        navigate("/app")
      }
    }
    catch (error){
      console.error('Error:', error);
    }
    
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <h1>Email</h1>
        <input
          type="text"
          id="username"
          name="username"
          value={loginData.username}
          onChange={loginFormHandler}
        />
      </div>
      <div>
      <h1>Password</h1>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={loginFormHandler}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

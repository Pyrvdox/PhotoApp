import React from 'react';

const LoginForm = () => {
  
  return (
    <form>
      <div>
      <h1>Email</h1>
        <input
          type="text"
          id="username"
          name="username"
        />
      </div>
      <div>
      <h1>Password</h1>
        <input
          type="password"
          id="password"
          name="password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

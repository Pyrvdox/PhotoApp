import React from 'react';

const RegisterForm = () => {
  
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
      <div>
      <h1>Confirm Password</h1>
        <input
          type="password"
          id="password2"
          name="password2"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default RegisterForm;

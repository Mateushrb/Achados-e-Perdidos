import React from 'react';

const LoginForm = ({ handleEmailChange, handlePasswordChange, handleSubmit }) => {
  return (
    <form className='container__login-form' onSubmit={handleSubmit}>
      <h2>Admin Login</h2>
      <label htmlFor="email">E-mail:</label>
      <input type="email" id="email" onChange={handleEmailChange} />

      <label htmlFor="password">Senha:</label>
      <input type="password" id="password" onChange={handlePasswordChange} />

      <button className='btn__login-form' type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

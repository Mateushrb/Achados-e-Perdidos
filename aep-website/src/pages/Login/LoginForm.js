import React, { useState } from 'react';
import './LoginStyles.css'

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Administrador"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;

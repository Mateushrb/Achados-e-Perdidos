import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './LoginStyles.css';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import Cookie from '../../components/Cookies/Cookies';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envia as credenciais para o servidor backend
    fetch('/login/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  };

  return (
    <>
      <Header />
      <div className="admin-login">
        <LoginForm
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleSubmit={handleSubmit}
        />

        {message && <p>{message}</p>}
      </div>
      <Footer />
      <WhatsAppButton />
      <Cookie />

    </>
  );
};

export default AdminLogin;

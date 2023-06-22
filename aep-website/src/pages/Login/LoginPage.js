import React from 'react';
import LoginForm from './LoginForm';
import './LoginStyles.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import Cookie from '../../components/Cookies/Cookies';

const LoginPage = () => {
  const handleLogin = (username, password) => {
    //  implementar a lógica de autenticação


    if (username === 'admin' && password === 'admin') {
      alert('Login successful');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <Header />
      <h1>Acesso Administrador</h1>
      <LoginForm onLogin={handleLogin} />
      <Footer />
      <WhatsAppButton />
      <Cookie />
    </div>
  );
};

export default LoginPage;

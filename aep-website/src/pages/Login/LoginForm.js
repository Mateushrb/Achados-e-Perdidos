import React from 'react';
import Input from './components/Input';
import Button from './components/Button';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm();

  function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('http://45.235.53.125:8080/administradores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((response) => {
        console.log(response)
        return response.json();
      }).then((json) => {
        console.log(json)
      })
    }
  }

  return (
    <section>
      <h1>Acesso Administrador</h1>
      <form action='' onSubmit={handleSubmit}>
        <Input label='E-mail administrador' type='texto' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;

import React from 'react';
import axios from 'axios';
import Input from './components/Input';
import Button from './components/Button';
import useForm from '../../Hooks/useForm';
import { useNavigate  } from 'react-router-dom';
import useLocalStorage from '../../Hooks/useLocalStorage';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm();
  const history =  useNavigate();
  const {setDataStorage} = useLocalStorage();

  function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      const data = {
        email: username.value,
        senha: password.value
      };

      axios.post('url da api/administradores/login', data)
        .then((res) => {
          console.log(res.data);

          // Verificar a resposta do servidor
          if (res.status === 200) {
            // Login bem-sucedido
            const token = res.data.token; // Supondo que a resposta contenha um token de acesso
            // Armazenar o token em localStorage, sessionStorage ou cookies
            setDataStorage('token', token);

            history('/dashboard/admin');

            // Redirecionar para a página restrita ou executar outras ações necessárias
          } else {
            // Login inválido ou erro no servidor
            const errorMessage = res.data.message; // Supondo que a resposta contenha uma mensagem de erro
            // Exibir a mensagem de erro para o usuário
            console.error(errorMessage);
          }
        })
        .catch((error) => {
          // Erro na solicitação ou na manipulação da resposta
          console.error('Erro:', error);
        });
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

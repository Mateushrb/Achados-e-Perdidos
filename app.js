// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outras funcionalidades
const express = require("express");
// Chamar a função express
const app = express();

// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());

// Testar conexão com o banco de dados
//const db = require("./db/models")

// Incluir as CONTROLLERS
const adms = require('./controllers/administrador');
const achados = require('./controllers/achados');
const perdidos = require('./controllers/perdidos');

// Criar as rotas
app.use('/', adms);
app.use('/', achados);
app.use('/', perdidos);

// Iniciar o servidor na porta 8080, criar a função utilizando o modelo Arrow function para retornar a mensagem de sucesso
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
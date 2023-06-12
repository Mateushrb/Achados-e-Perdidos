#### COMO RODAR O PROJETO BAIXADO
##### Instalar todas as dependências indicadas pelo package.json
`npm install`

##### Criar a base de dados no MySQL
`CREATE DATABASE achados_e_perdidos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`

##### Alterar as credenciais do banco de dados no arquivo ".env"

##### Executar as migrations
`npx sequelize-cli db:migrate`

##### Rodar o projeto
`node app.js`

##### Rodar o projeto utilizando o nodemon
`npm run dev`
ou
`nodemon app.js`

# Achados-e-Perdidos

## Rotas

Rotas para utilizar na aplicação

Administrador
Cadastrar administrador: POST http://localhost:8080/administradores
Listar administradores: GET http://localhost:8080/administradores?page=1
Editar administrador: PUT http://localhost:8080/administradores/id
Apagar administrador: DELETE http://localhost:8080/administradores/id

Achados
Cadastrar achados: POST http://localhost:8080/achados
Listar achados: GET http://localhost:8080/achados?page=1
Editar achados: PUT http://localhost:8080/achados/id
Apagar achados: DELETE http://localhost:8080/achados/id

Perdidos
Cadastrar perdidos: POST http://localhost:8080/perdidos
Listar perdidos: GET http://localhost:8080/perdidos?page=1
Editar perdidos: PUT http://localhost:8080/perdidos/id
Apagar perdidos: DELETE http://localhost:8080/perdidos/id
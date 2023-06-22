// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outras funcinalidades
const express = require('express');
// Chamar a função express
const router = express.Router();
// Incluir o arquivo que possui a conexão com o banco de dados
const db = require('./../db/models');

// Criar a rota listar
router.get("/administradores", async (req, res) => {

    // Receber o número da página, quando não é enviado o número da página é atribuido 1
    const { page = 1 } = req.query;
    //console.log(page);

    // Limite de registros em cada página
    const limite = 9999;

    // Variável com o número da última página
    let lastPage = 1;

    // Contar a quantidade de registros no banco de dados
    const countAdm = await db.Administradores.count();
    //console.log(countUser);

    // Acessa o IF quando encontrar registro no banco de dados
    if (countAdm !== 0) {
        // Calcular a última página
        lastPage = Math.ceil(countAdm / limite);
        //console.log(lastPage);
    } else {
        // Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Nenhum administrador encontrado!"
        });
    }

    // recuperar todos os usuários do banco de dados
    const administradores = await db.Administradores.findAll({

        // Indicar quais colunas recuperar
        attributes: ['id', 'name', 'cpf', 'email', 'senha'],

        // Ordenar os registros pela coluna id na forma decrescente
        order: [['id', 'ASC']],

        // Calcular a partir de qual registro deve retornar e o limite de registros
        offset: Number((page * limite) - limite),
        limit: limite
    });

    // Acessa o IF se encontrar o registro no banco de dados
    if (administradores) {
        // Criar objeto com as informações para paginação
        let paginacao = {
            // Caminho 
            path: '/administradores',
            // Página atual
            page,
            // URL da página anterior
            prev_page_url: page - 1 >= 1 ? page - 1 : false,
            // URL da próxima página
            next_page_url: Number(page) + Number(1) > lastPage ? false : Number(page) + Number(1),
            // Última página
            lastPage,
            // Quantidade de registros
            total: countAdm
        }

        // Pausa o processamento e retorna os dados em formato de objeto
        return res.json({
            administradores,
            paginacao
        });
    } else {
        // Pausa o processamento e retorna a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Administrador não cadastrado com sucesso!"
        });
    }
});

// Criar a rota visualizar a receber o parâmetro id enviado na URL
// Endereço para acessar através da aplicação externa: http://localhost:8080/administradores/2
router.get("/administradores/:id", async (req, res) => {

    // Receber o parâmetro enviado na URL
    const { id } = req.params;

    // Recuperar o registro do banco de dados
    const adm = await db.Administradores.findOne({
        //Indicar quais colunas recuperar
        attributes: ['id', 'name', 'cpf', 'email', 'senha', 'createdAt', 'updatedAt'],

        // Acrescentando condição para indicar qual registro deve ser encontrado do banco de dados
        where: {id}
    });

    // Acessa o IF se encontrar o registro no banco de dados
    if (adm) {
        // Pausar o processamento e retornar os dados
        return res.json({
            adm: adm.dataValues
        })
    } else {
        // Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Administrador não encontrado!"
        })
    }
});

// Criar a rota cadastrar administrador
/*
// A aplicação externa deve indicar que está enviando os dados em formato de objeto Content-Type: application/json

// Dados em formato de objeto
{
    "name": "Mateus",
    "cpf": "123.456.789-10",
    "email": "mateus@gmail.com",
    "senha": "minhasenha"
}
*/
router.post("/administradores", async (req, res) => {

    // Receber os dados enviados no corpo da requisição
    let dados = req.body;
    console.log(dados);

    // Salvar no banco de dados
    await db.Administradores.create(dados).then((dadosAdministrador) => {
        // Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            mensagem: "Administrador cadastrado com sucesso!",
            dadosAdministrador
        });
    }).catch((ERRO) => {
        // Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Não foi possível cadastrar o administrador!",
            ERRO
        });
    });
});

// Criar a rota editar

// Endereço para acessar através da aplicação externa: http://localhost:8080/administradores

/*
// A aplicação externa deve indicar que está enviado os dados em formato de objeto
Content-Type: application/json

// Dados em formato de objeto
{
    "id": 1,
    "name": "Mateus",
    "cpf": "123.456.789-10",
    "email": "mateus@gmail.com",
    "senha": "minhasenha"
}
*/
router.put("/administradores/:id", async (req, res) => {

    // Receber os dados enviado no corpo da requisição
    let dados = req.body;

    // Receber o parâmetro enviado na URL
    const { id } = req.params;
    
    // Editar no banco de dados
    const [rowsAffected] = await db.Administradores.update(dados, { where: {id: id}})
    
    if (rowsAffected === 0) {
        // Nenhum registro foi alterado, então trata como um erro
        return res.status(400).json({
            mensagem: "Erro: Administrador não encontrado!"
        });
    }

    // Pausar o processamento e retornar a mensagem
    return res.json({
        mensagem: "Administrador editado com sucesso!"
    })
    
});

// Criar a rota apagar e receber o parâmetro id enviado na URL
// Endereço para acessar através da aplicação externa: http://localhost:8080/administradores/1
router.delete("/administradores/:id", async (req, res) => {

    // Receber o parâmetro enviado na URL
    const { id } = req.params;
    
    // Apagar o usuário no banco de dados utilizando a MODELS users
    const rowsAffected = await db.Administradores.destroy({
        // Acrescentar o WHERE na instrução SQL indicando qual registro excluir no BD
        where: {id}
    })

    if (rowsAffected === 0) {
        // Nenhum registro foi alterado, então trata como um erro
        return res.status(400).json({
            mensagem: "Erro: Administrador não encontrado!"
        });
    }

    // Pausar o processamento e retornar a mensagem
    return res.json({
        mensagem: "Administrador apagado com sucesso!"
    });

});

// Exportar a função que está dentro da constante router
module.exports = router;
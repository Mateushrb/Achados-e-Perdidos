// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express');
// Chamar a função express
const router = express.Router();
// Incluir o arquivo que possui a conexão com o banco de dados
const db = require('./../db/models');
// Restrição de rota
const { eAdmin } = require('./../middlewares/auth');

// Criar rota listar
router.get("/perdidos", async (req, res) => {

    // Receber o número da página, quando não é enviado o número da página é atribuido 1
    const { page = 1 } = req.query;
    //console.log(page);

    // Limite de registros em cada página
    const limite = 9999;

    // Variável com o número da última página
    let lastPage = 1;

    // Contar a quantidade de registros no banco de dados
    const countPerdidos = await db.Perdidos.count();
    //console.log(countUser);

    // Acessa o IF quando encontrar registro no banco de dados
    if (countPerdidos !== 0) {
        // Calcular a última página
        lastPage = Math.ceil(countPerdidos / limite);
        //console.log(lastPage);
    } else {
        // Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Nenhum item perdido encontrado!"
        });
    }

    // Recuperar todos os itens perdidos do banco de dados
    const perdidos = await db.Perdidos.findAll({

        // Indicar quais colunas recuperar
        attributes: ['id', 'nome_item', 'descricao', 'nome', 'email', 'telefone', 'item_encontrado'],

        // Ordenar os registros pela coluna id na forma decrescente
        order: [['id', 'ASC']],

        // Calcular a partir de qual registro deve retornar e o limite de registros
        offset: Number((page * limite) - limite),
        limit: limite
    });

    // Acessa o IF se encontrar o registro no banco de dados
    if (perdidos) {
        // Criar objeto com as informações para paginação
        let paginacao = {
            // Caminho 
            path: '/perdidos',
            // Página atual
            page,
            // URL da página anterior
            prev_page_url: page - 1 >= 1 ? page - 1 : false,
            // URL da próxima página
            next_page_url: Number(page) + Number(1) > lastPage ? false : Number(page) + Number(1),
            // Última página
            lastPage,
            // Quantidade de registros
            total: countPerdidos
        }

        // Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            perdidos,
            paginacao
        });
    } else {
        // Pausar o processamento e retornar mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Item perdido não cadastrado com sucesso!"
        });
    }
});

// Criar a rota visualizar e receber o parâmetro id enviado na URL
// Endereço para acessar através da aplicação externa: http://localhost:8080/perdidos/2
router.get("/perdidos/:id", async (req, res) => {
    
    // Receber o parâmetro enviado na URL
    const { id } = req.params;

    // Recuperar o registro do banco de dados
    const perdido = await db.Perdidos.findOne({
        //Indicar quais colunas recuperar
        attributes: ['id', 'nome_item', 'descricao', 'nome', 'email', 'telefone', 'item_encontrado', 'createdAt', 'updatedAt'],

        // Acrescentando condição para indicar qual registro deve ser retornado do banco de dados
        where: {id}
    });

    // Acessa o IF se encontrar o registro no banco de dados 
    if (perdido) {
        // Pausar o processamento e retornar os dados
        return res.json({
            perdido: perdido.dataValues
        })
    } else {
        // Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Item perdido não encontrado!"
        })
    }
});

// Criar a rota cadastrar
/*
// A aplicação externa deve indicar que está enviando os dados em formato de objeto Content-Type: application/json

// Dados em formato de objeto
{
    "nome_item": "Lancheira",
    "descricao": "Lancheira da cor rosa e tampa transparente",
    "nome": "Mateus",
    "email": "mateus@gmail.com",
    "telefone": "48911112222",
    "item_encontrado": "true"
}
{
    "nome_item": "Copo de silicone",
    "descricao": "Copo de silicone na cor azul",
    "nome": "Mateus",
    "email": "mateus@gmail.com",
    "telefone": "48911112222",
    "item_encontrado": "false"
}
*/
router.post("/perdidos", eAdmin, async (req, res) => {
    
    // Receber os dados enviados no corpo da requisição
    let dados = req.body;
    console.log(dados);

    // Salvar no banco de dados 
    await db.Perdidos.create(dados).then((dadosUsuario) => {
        // Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            mensagem: "Item perdido cadastrado com sucesso!",
            dadosUsuario
        });
    }).catch((ERRO) => {
        // Pausar o processamento e retornar a mensagem de erro
        return res.json({
            mensagem: "Erro: Não foi possível cadastrar o item perdido!",
            ERRO
        });
    });
});

// Criar a rota editar

// Endereço para acessar através da aplicação externa: http://localhost:8080/users

/*
// A aplicação externa deve indicar que está enviado os dados em formato de objeto
Content-Type: application/json

// Dados em formato de objeto

{
    "id": 2,
	"nome_item": "Copo de silicone",
	"descricao": "Copo de silicone na cor azul",
	"nome": "Mateus",
	"email": "mateus@gmail.com",
	"telefone": "48911112222",
	"item_encontrado": false
}
*/
router.put("/perdidos/:id", eAdmin, async (req, res) => {

    // Receber os dados enviado no corpo da requisição
    let dados = req.body;

    // Receber o parâmetro enviado na URL
    const { id } = req.params;
    
    // Editar no banco de dados
    const [rowsAffected] = await db.Perdidos.update(dados, { where: {id: id}})
    console.log(rowsAffected)
    if (rowsAffected === 0) {
        // Nenhum registro foi alterado, então trata como um erro
        return res.status(400).json({
            mensagem: "Erro: Item perdido não encontrado!"
        });
    }

    // Pausar o processamento e retornar a mensagem
    return res.json({
        mensagem: "Item perdido editado com sucesso!"
    })
    
});

// Criar a rota apagar e receber o parâmetro id enviado na URL
// Endereço para acessar através da aplicação externa: http://localhost:8080/perdidos/2
router.delete("/perdidos/:id", eAdmin, async (req, res) => {

    // Receber o parâmetro enviado na URL
    const { id } = req.params;
    
    // Apagar o usuário no banco de dados utilizando a MODELS users
    const rowsAffected = await db.Perdidos.destroy({
        // Acrescentar o WHERE na instrução SQL indicando qual registro excluir no BD
        where: {id}
    })

    if (rowsAffected === 0) {
        // Nenhum registro foi alterado, então trata como um erro
        return res.status(400).json({
            mensagem: "Erro: Item perdido não encontrado!"
        });
    }

    // Pausar o processamento e retornar a mensagem
    return res.json({
        mensagem: "Item perdido apagado com sucesso!"
    });

});

// Exportar a instrução que está dentro da constante router
module.exports = router;
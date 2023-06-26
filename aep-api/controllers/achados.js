// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express');
// Chamar a função express
const router = express.Router();
// Incluir o arquivo que possui a conexão com o banco de dados
const db = require('./../db/models');
// Restrição de rota
const { eAdmin } = require('./../middlewares/auth');

// Criar a rota listar
router.get("/achados", async (req, res) => {

    // Receber o número da página, quando não é enviado o número da página é atribuido 1
    const { page = 1 } = req.query;
    //console.log(page);

    // Limite de registros em cada página
    const limite = 10;

    // Variável com o número da última página
    let lastPage = 1;

    // Contar a quantidade de registros no banco de dados
    const countAchados = await db.Achados.count();
    //console.log(countUser);

    // Acessa o IF quando encontrar registro no banco de dados
    if (countAchados !== 0) {
        // Calcular a última página
        lastPage = Math.ceil(countAchados / limite);
        //console.log(lastPage);
    } else {
        // Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Nenhum item achado encontrado!"
        });
    }

    // recuperar todos os achados do banco de dados
    const achados = await db.Achados.findAll({

        // Indicar quais colunas recuperar
        attributes: ['id', 'nome_item', 'descricao', 'quem_achou', 'local', 'data', 'hora_aproximada', 'dono_encontrado'],

        // Ordenar os registros pela coluna id na forma decrescente
        order: [['id', 'ASC']],

        // Calcular a partir de qual registro deve retornar e o limite de registros
        offset: Number((page * limite) - limite),
        limit: limite
    });

    // Acessa o IF se encontrar o registro no banco de dados
    if (achados) {
        // Criar objeto com as informações para paginação
        let paginacao = {
            // Caminho 
            path: '/achados',
            // Página atual
            page,
            // URL da página anterior
            prev_page_url: page - 1 >= 1 ? page - 1 : false,
            // URL da próxima página
            next_page_url: Number(page) + Number(1) > lastPage ? false : Number(page) + Number(1),
            // Última página
            lastPage,
            // Quantidade de registros
            total: countAchados
        }

        // Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            achados,
            paginacao
        });
    } else {
        // Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Item achado não cadastrado com sucesso!"
        });
    }
});

// Criar a rota visualizar e receber o parâmetro id enviado na URL
// Endereço para acessar através da aplicação externa: http://localhost:8080/achados/2
router.get("/achados/:id", async (req, res) => {
    
    // Receber o parâmetro enviado na URL
    const { id } = req.params;

    // Recuperar o registro do banco de dados
    const achado = await db.Achados.findOne({
        // Indicar quais colunas recuperar
        attributes: ['id', 'nome_item', 'descricao', 'quem_achou', 'local', 'data', 'hora_aproximada', 'dono_encontrado', 'createdAt', 'updatedAt'],

        // Acrescentando condição para indicar qual registro deve ser encontrado do banco de dados
        where: {id}
    });

    // Acessa o IF se encontrar o registro no banco de dados
    if (achado) {
        // Pausar o processamento e retornar os dados
        return res.json({
            achado: achado.dataValues
        })
    } else {
        // Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Item achado não encontrado!"
        })
    }
});

// Criar a rota cadastrar
/*
// A aplicação externa deve indicar que está enviando os dados em formato de objeto Content-Type: application/json

// Dados em formato de objeto
{
    "nome_item": "Celular",
    "descricao": "Celular modelo X perdido encontrado ao lado do banco em frente a biblioteca",
    "quem_achou": "Mateus",
    "local": "Em frente a biblioteca",
    "data": "27-05-2023",
    "hora_aproximada": "10h54",
    "dono_encontrado": "false"
}
{
	"nome_item": "Caderneta",
	"descricao": "Caderneta do SENAI com informações na primeira página sobre estudos de robótica",
	"quem_achou": "Mateus",
	"local": "Em frente a cantina",
	"data": null,
	"hora_aproximada": "10h54",
	"dono_encontrado": true
}
*/
router.post("/achados", eAdmin, async (req, res) => {

    // Receber os dados enviados no corpo da requisição
    let dados = req.body;
    console.log(dados);

    // Salvar no banco de dados
    await db.Achados.create(dados).then((dadosUsuario) => {
        // Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            mensagem: "Item achado cadastrado com sucesso!",
            dadosUsuario
        });
    }).catch((ERRO) => {
        // Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Não foi possível cadastrar o item achado!",
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
    "id": 1,
	"nome_item": "Celular",
	"descricao": "Celular modelo X perdido encontrado ao lado do banco em frente a biblioteca",
	"quem_achou": "Mateus",
	"local": "Em frente a biblioteca",
	"data": "2023-05-25",
	"hora_aproximada": "10h54",
	"dono_encontrado": false
}
*/
router.put("/achados/:id", eAdmin, async (req, res) => {

    // Receber os dados enviado no corpo da requisição
    let dados = req.body;

    // Receber o parâmetro enviado na URL
    const { id } = req.params;
    
    // Editar no banco de dados
    const [rowsAffected] = await db.Achados.update(dados, { where: {id: id}})
    
    if (rowsAffected === 0) {
        // Nenhum registro foi alterado, então trata como um erro
        return res.status(400).json({
            mensagem: "Erro: Item achado não encontrado!"
        });
    }

    // Pausar o processamento e retornar a mensagem
    return res.json({
        mensagem: "Item achado editado com sucesso!"
    })
    
});

// Criar a rota apagar e receber o parâmetro id enviado na URL
// Endereço para acessar através da aplicação externa: http://localhost:8080/achados/2
router.delete("/achados/:id", eAdmin, async (req, res) => {

    // Receber o parâmetro enviado na URL
    const { id } = req.params;
    
    // Apagar o usuário no banco de dados utilizando a MODELS users
    const rowsAffected = await db.Achados.destroy({
        // Acrescentar o WHERE na instrução SQL indicando qual registro excluir no BD
        where: {id}
    })

    if (rowsAffected === 0) {
        // Nenhum registro foi alterado, então trata como um erro
        return res.status(400).json({
            mensagem: "Erro: Item achado não encontrado!"
        });
    }

    // Pausar o processamento e retornar a mensagem
    return res.json({
        mensagem: "Item achado apagado com sucesso!"
    });

});

// Exportar a instrução que está dentro da constante router
module.exports = router;
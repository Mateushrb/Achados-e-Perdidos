const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = {
    eAdmin: async function (req, res, next) {
        const authHeader = req.headers.authorization;
        if(!authHeader) {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Necessário realizar o login para acessar a página! Falta o token A!"
            })
        }

        const [, token] = authHeader.split(' ');
        
        if (!token) {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Necessário realizar o login para acessar a página! Falta o token B!"
            })
        }

        try {
            const decode = await promisify(jwt.verify)(token, "gGHe&4AaSd23%*7FAs5(fAG4G(GaF21As");
            req.userId = decode.id;
            return next();
        } catch (err) {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Necessário realizar o login para acessar a página! Token Inválido!"
            });
        };
    }
};
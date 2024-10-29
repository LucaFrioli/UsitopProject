// configurações iniciais para bom funcionamento do módulo
const path = require('path');
const express = require('express');
const routes = express.Router();

// constrolers
// cahamada dos arquivos, para gerenciamento de rotas de forma organizada
const homeController = require(
	path.resolve(__dirname, 'src', 'controllers', 'homeController.js')
);

const contatoController = require(
	path.resolve(__dirname, 'src', 'controllers', 'contatoController.js')
);

const produtosController = require(
	path.resolve(__dirname, 'src', 'controllers', 'produtosController.js')
);

const sobreController = require(
	path.resolve(__dirname, 'src', 'controllers', 'sobreController.js')
);

// Middleware

const contactMiddleware = require(
	path.resolve(__dirname, 'src', 'middlewares', 'contactMiddleware.js')
);

// rotas
// definição das rotas, sempre colocar um comentário indicando a qual página as rotas da seção pertencem ex :  pertence

// rotas da página index.ejs
routes.get('/', homeController.getIndex);

// rotas da página contato.ejs
routes.get(
	'/contato',
	contactMiddleware.infoMidd,
	contatoController.getContato
);
routes.post('/contato', contatoController.postContato);

// rotas da página produtos.ejs
routes.get('/produtos', produtosController.getProdutos);

// rotas da página sobre.ejs
routes.get('/sobre', sobreController.getSobre);

// rotass referentes a página (...)
// definir rotas de (...)

// e assim por diante em cada página

module.exports = routes;

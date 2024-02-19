//configurações iniciais para bom funcionamento do módulo
const path = require('path');
const express = require('express');
const routes = express.Router();

//constrolers
//cahamada dos arquivos, para gerenciamento de rotas de forma organizada
const homeController = require(path.resolve(__dirname, 'src', 'controllers', 'homeController.js'));

//rotas
//definição das rotas, sempre colocar um comentário indicando a qual página as rotas da seção pertencem ex :  pertence  

//rotas da página index.ejs
routes.get('/contato.html', homeController.getIndex);


//rotass referentes a página (...)
//definir rotas de (...)


// e assim por diante em cada página 

module.exports = routes;
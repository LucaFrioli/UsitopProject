const formModel = require('../models/formModel');

const pageName = 'index'; // indicando qual página dinamica deve ser utilizada  para referencia do arquivo controller, caso venha a mudar eventualmente utilizar o nome da página localmente 
const data = { demo: 'Sou uma tag que está sendo inserida de modo dinamico' }//par chave-valor

exports.getIndex = (req, res) => { //aqui está ocorrendo a renderização do index.ejs como exemplo
    res.render(pageName, data);//sempre que quisermos renderizar uma view deveosmand-la  pela resposta com o método render, o primeiro parâmetro indica o nome da view, e o segundo as informações que deverão ser injetadas, obs: ao longodo projeto iremos automatizar isso;
}

const HomeModel = require('../models/HomeModel');
const pageName = 'contato';
const data = { location: pageName };

exports.getContato = (req, res) => {
	res.render(pageName, data);
};

exports.postContato = (req, res) => {
	let { nome, telefone, email, message } = req.body;
	// Info para system log
	console.log(req.body);
	if (!HomeModel.isValidPhoneNumber(telefone)) {
		telefone = '+55' + telefone.replace(' ', '');
	}
	try {
		new HomeModel(nome, telefone, email, message).create();
	} catch (e) {
		console.log(e);
	}
	const dataPost = { ...data, ...req.body };
	console.log(dataPost);
	res.render(pageName, dataPost);
};

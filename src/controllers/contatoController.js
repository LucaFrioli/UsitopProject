// const HomeModel = require('../models/HomeModel');
const pageName = 'contato';
const data = { location: pageName };
const { verifyBody } = require('./utils/validateBody');
const MessageService = require('../models/contactsModel/main');

exports.getContato = (req, res) => {
	res.render(pageName, data);
};

exports.postContato = (req, res) => {
	const expectedKeys = [
		'clientName',
		'clientEmail',
		'clientCellphone',
		'clientMessage',
		'_csrf'
	];
	const body = req.body;
	try {
		if (verifyBody(body, expectedKeys)) {
			console.log(body, 'vindo do controller');
			const service = new MessageService(body);

			service.sanitizeAndValidateBody();

			if (service.error.length !== 0) {
				req.flash('errors', service.error);
				req.session.save(() => {
					res.redirect('back');
				});
				return;
			}
			service.createMessage();
			req.flash(
				'success',
				'Sua mensagem foi enviada com Sucesso ! Deseja enviar outra mensagem ?'
			);
			res.redirect('/contato');
		} else {
			throw new Error('Corpo de requisição incorreto');
		}
	} catch (error) {
		console.log(error);
		res.redirect('/');
	}
};

// Realizar chamadas dos arquivos e dependencias deste arquivo;
const { resolve } = require('node:path');
const mongoose = require('mongoose');
const { mainSchema } = require(resolve(__dirname, 'schema.js'));
const validations = require('./validations');

// criar modelo com base noschema definido no arquivo de referência
const homeModel = mongoose.model('ClientMessages', mainSchema);

// criar a classe de serviço que será utilizada para o "CRUD" das menssagens
class messagesService {
	/**
	 * O construtor espera um corpo de requisição para ser utilizado nas transações do banco de dados
	 * @param {Object} reqBody
	 */
	constructor(reqBody) {
		this.model = homeModel;
		this.body = reqBody;
		this.error = [];
		this.contact = null;
	}

	// método que define a sanitizaçõa e validação dos dados que estão chegando na aplicação
	sanitizeAndValidateBody() {
		validations.cleanData(this.body);
		validations.fieldIsEmail(this.body.clientEmail, this.error);
		validations.fieldIsPhoneNumber(this.body.clientCellphone, this.error);
	}

	// método que cuidará da criação de novos contatos
	async createMessage() {
		if (this.error.length !== 0) {
			console.log(
				`Erros capturados ao tentar cadastrar nova menssagem : ${this.error}`
			);
			return;
		}

		this.body.date = new Date().toLocaleString(`pt-BR`, {
			dateStyle: 'full',
			timeStyle: 'medium'
		});

		console.log(`
################################################################
A informação que será gravada no banco de dados será a seguinte :
################################################################\n
		`);
		console.table(this.body);

		this.contact = await this.model.create(this.body);
	}
}

module.exports = messagesService;

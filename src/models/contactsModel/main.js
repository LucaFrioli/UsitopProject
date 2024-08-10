const { resolve } = require('node:path');
const mongoose = require('mongoose');
const { mainSchema } = require(resolve(__dirname, 'schema.js'));
const validations = require('./validations');

const homeModel = mongoose.model('ClientMessages', mainSchema);

class messagesService {
	/**
	 * O construtor espera um corpo de requisição para ser utilizado
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

		this.contact = await this.model.create(this.body);
	}
}

module.exports = messagesService;

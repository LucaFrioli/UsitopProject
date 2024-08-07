const { resolve } = require('node:path');
const mongoose = require('mongoose');
const { mainSchema } = require(resolve(__dirname, 'schema.js'));
const validations = require('./validations');

const homeModel = mongoose.model('ClientMessages', mainSchema);

class messagesService {
	constructor(reqBody) {
		this.model = homeModel;
		this.body = reqBody;
		this.error = [];
		this.contact = null;
	}

	// método que define a sanitizaçõa e validação dos dados que estão chegando na aplicação
	sanitizeAndValidateBody() {
		validations.cleanData(this.body);
		validations.fieldIsEmail(this.body.email, this.error);
		validations.fieldIsPhoneNumber(this.body.number, this.error);
	}

	// método que cuidará da criação de novos contatos
	async createMessage() {
		this.sanitizeAndValidateBody();

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

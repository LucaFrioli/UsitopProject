const mongoose = require('mongoose');
const { PhoneNumberUtil } = require('google-libphonenumber');
const phoneUtil = PhoneNumberUtil.getInstance();

const homeSchema = new mongoose.Schema({
	clientName: { type: String, required: true },
	clientCellphone: { type: String, required: true },
	clientEmail: { type: String, required: true, unique: true },
	clientMessage: { type: String, required: true }
});

const homeModel = mongoose.model('ClientMessages', homeSchema);

class HomeModel {
	constructor(clientName, clientCellphone, clientEmail, clientMessage) {
		this.clientName = clientName;
		this.clientCellphone = HomeModel.isValidPhoneNumber(clientCellphone) ? clientCellphone : false;
		this.clientEmail = HomeModel.isEmail(clientEmail) ? clientEmail : false;
		this.clientMessage = clientMessage;
	}

	create() {


		homeModel
			.create({
				name: this.clientName,
				cellphone: this.clientCellphone,
				email: this.clientEmail,
				clientMessage: this.clientMessage
			})
			.then((data) => {
				console.log(this.clientCellphone, this.clientEmail);
				console.log(data, 'Tudo foi criado com sucesso');
			})
			.catch((e) => {
				console.log(e);
			});
	}

	static isEmail(email) {
		// Expressão regular para validar o formato do e-mail
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	static isValidPhoneNumber(phoneNumber) {
		try {
			const parsedNumber = phoneUtil.parse(phoneNumber);
			return phoneUtil.isValidNumber(parsedNumber);
		} catch (error) {
			return false;
		}
	}
}

module.exports = HomeModel;

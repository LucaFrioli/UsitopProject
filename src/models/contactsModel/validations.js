const { resolve } = require('node:path');
const validator = require('validator');
const { warnAndStoreErrors } = require(
	// '../services/logInterface'
	resolve(__dirname, '..', 'utils', 'logInterface.js')
);


/**
 * Cleans and maintains strings only
 * @param {{}} body
 * @returns {body<{modified}>}
 */
function cleanData(body) {
	for (const key in body) {
		if (typeof body[key] !== 'string') {
			body[key] = '';
		}
	}
	return body;
}

/**
 * Function to validate Email
 * @param {string} [valueOfEmailKey]
 * @param {string[]} [error]
 */
function fieldIsEmail(valueOfEmailKey, error) {
	try {

		if (typeof valueOfEmailKey !== 'string') {
			throw new Error('O email passado não é uma string e sim '+(typeof valueOfEmailKey)+' então está menssagem não será cadastrada');
		}

		if (!validator.isEmail(valueOfEmailKey)) error.push('Email é inválido');
	} catch (e) {
		warnAndStoreErrors(e);
	}
	// eslint-disable-next-line no-useless-return
	return;
}

/**
 * validação de telefone fixo :
 * @param {string} phone
 * @returns {boolean}
*/
function validaTelefoneFixo (phone) {
    const regex = '^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$';
	const regexTell = '^\\([0-9]{2}\\)((3[0-9]{7})|(9[0-9]{8}))$'
    if(regex.test(phone) || regexTell.test(phone)){
		return true
	}
	return false;
}

/**
 *	Function to validate a phone number
 * @param {string} [valueOfPhoneNumberKey]
 * @param {string[]} [error]
 */
function fieldIsPhoneNumber(valueOfPhoneNumberKey, error) {
	try {

		if (typeof valueOfPhoneNumberKey !== 'string') {
			throw new Error(
				`O número de telefone deve ser uma string porém o tipo passado foi ${typeof valueOfPhoneNumberKey}`
			);
		}

		if (!validator.isMobilePhone(valueOfPhoneNumberKey) || !validaTelefoneFixo(valueOfPhoneNumberKey)){
			error.push('Numero de telefone é inválido');
		}

	} catch (e) {
		warnAndStoreErrors(e);
	}

	// eslint-disable-next-line no-useless-return
	return;
}

module.exports = { cleanData, fieldIsEmail, fieldIsPhoneNumber };

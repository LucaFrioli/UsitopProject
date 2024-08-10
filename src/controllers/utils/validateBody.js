/**
 * Função para validação de corpo de requisição e interação com banco de dados
 * @param {{}} [body] - body of the request
 * @param {string[]} [expectedKeys] - array whith the names of expected Keys in a body of the request
 */
function verifyBody(body, expectedKeys) {
	const keys = Object.keys(body);
	// eslint-disable-next-line prefer-const
	for (let key of keys) {
		// eslint-disable-next-line no-prototype-builtins
		if (
			!expectedKeys.includes(key) ||
			keys.length !== expectedKeys.length
		) {
			return false;
		}
	}
	return true;
}

module.exports = { verifyBody };

const mongoose = require('mongoose');

const versionsSchema = {
	/**
	 * To version use this :
	 *
	 * Vx : {
	 *		adding: {},
	 *		removing: string[]
	 * }
	 *
	 * OBS: The x must be equal a number that represents the version of the Schema. So Version 1 = V1, and so on;
	 *
	 * After defining the fields to add and remove, remember to update the schema in key **mainSchema** with de descripted modifications, to mantain the new registers in an intact format, be carfull using the versions, you have be know what you doing!!!!
	 */

	mainSchema: new mongoose.Schema({
		clientName: { type: String, required: true },
		clientEmail: { type: String, required: true },
		clientCellphone: { type: String, required: true },
		clientMessage: { type: String, required: true }
	})
};

module.exports = versionsSchema;

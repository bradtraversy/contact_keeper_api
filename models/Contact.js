const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String
	},
	phone: {
		type: String
	},
	type: {
		type: String,
		default: 'personal'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('contact', ContactSchema);

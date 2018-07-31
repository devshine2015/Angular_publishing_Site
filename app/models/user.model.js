'use strict';

const UserSchema = new mongoose.Schema({
	name: mongoose.Schema.Types.String,
	email: mongoose.Schema.Types.String,
	location: {
		city: mongoose.Schema.Types.String,
		state: mongoose.Schema.Types.String,
		country: mongoose.Schema.Types.String
	},
	gender: mongoose.Schema.Types.String,
	age: mongoose.Schema.Types.Number,
	login: {
		type: mongoose.Schema.Types.String			// Google, Facebook, Twitter,
	},
	bookmarks: mongoose.Schema.Types.Array
}, {
	timestamps: true
})

module.exports = mongoose.model('User', UserSchema);

module.exports.UserSchema = UserSchema;
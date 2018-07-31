'use strict';

const LocationSchema = new mongoose.Schema({
	city: mongoose.Schema.Types.String,
	state: mongoose.Schema.Types.String,
	country: mongoose.Schema.Types.String
}, {
	timestamps: true
})

module.exports = mongoose.model('Location', LocationSchema);

module.exports.LocationSchema = LocationSchema;
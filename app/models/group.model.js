'use strict';

const GroupSchema = new mongoose.Schema({
	groupType: { type: mongoose.Schema.Types.String, lowercase: true },	// g1, g2, g3, g4, g6, g7, g11, g12, g13 
	name: { type: mongoose.Schema.Types.String, lowercase: true },
	description: { type: mongoose.Schema.Types.String, default: ''},
	state: { type: mongoose.Schema.Types.String, default: 'S1' }	// except g11, [S1,S2,S3]
}, {
	timestamps: true
});

module.exports = mongoose.model('Group', GroupSchema);

module.exports.GroupSchema = GroupSchema;
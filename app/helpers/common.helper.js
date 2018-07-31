'use strict';

const shortid = require('short-id');

shortid.configure({
	length: 8
});

module.exports.generateShortId = function() {
	return shortid.generate();
};
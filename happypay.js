var getKey = require('./scripts/getKey');
var initialize = require('./scripts/initialize');

module.exports = {
	getKey: function(email, password) {
		getKey(email, password);
	},
	initialize: function(key, secret) {
		return initialize(key, secret);
	}
}

var request = require('request');

var validateKey = function(key, secret, callback) {

	var options = {
		url: 'http://localhost:8080/validateKey/',
		method: 'POST',
		json: true,
		body: {
	  		"key": key,
	  		"secret": secret
	  	},
	  	headers: {
	    	'Authentication': secret
	  	}
	};

	request(options, function (error, response, body) {
		callback(error, body);
	})

}

module.exports = validateKey;
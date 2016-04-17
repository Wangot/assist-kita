var Q = require("q");
var request = require('request');

function ChikkaApiService() {

	var CHIKKA_API_URL = 'https://post.chikka.com/smsapi/request'
	var API_SECRET = '60dc5cdd9621c51942f8637da7d41b4bf331779b114047f95df7f052f67fd9da';
	var API_CLIENT_ID = 'c6d706ab5729596f18ed600962cd06004288c03f3c46874a7523528d39477311';
	var SHORT_CODE = '29290170414';

	this.send = function(mobileNumber, message, callback){
        var deferred = Q.defer();
		
		if(mobileNumber.length <= 0 ){
			console.log("Invalid mobile number");
			// return callback("Invalid mobile number");
            deferred.resolve("Invalid mobile number");
		}

		// Set the headers
		var headers = {
			'User-Agent':       'Super Agent/0.0.1',
			'Content-Type':     'application/x-www-form-urlencoded'
		}
		
		// Configure the request
		var options = {
			url: CHIKKA_API_URL,
			method: 'POST',
			headers: headers,
			form: {
		  		message_type : 'SEND',
		        mobile_number : mobileNumber, //"639181234567",
		        shortcode : SHORT_CODE,
		        message_id : "12345678901234567890123456789012",
		        message : message,
		        client_id : API_CLIENT_ID,
		        secret_key : API_SECRET
			}
		}

        // deferred.resolve(options.form);
		
		// Start the request
		request(options, function (error, response, body) {
    		if (!error && response.statusCode == 200) {
    		// Print out the response body
    			console.log(body)
    			// callback(null, "success");

                deferred.resolve(options.form);
    		}else{
                console.log(error);
                deferred.resolve(options.form);
            }
		});

        return deferred.promise;
	}
}

module.exports = ChikkaApiService
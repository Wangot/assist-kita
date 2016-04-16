var q = require('q');
var querystring = require('querystring');
var http = require('http');

function ChikkaApiService() {

	var CHIKKA_API_URL = 'post.chikka.com'
	var API_SEND_REQUEST_URL = '/smsapi/request';
	var API_SECRET = '60dc5cdd9621c51942f8637da7d41b4bf331779b114047f95df7f052f67fd9da';
	var API_CLIENT_ID = 'c6d706ab5729596f18ed600962cd06004288c03f3c46874a7523528d39477311';
	var SHORT_CODE = '29290170414';

	this.send = function(mobileNumber, message, callback){
		
		if(mobileNumber.length <= 0 ){
			console.log("Invalid mobile number");
			return callback("Invalid mobile number");
		}

		//message_type=SEND&mobile_number=639181234567&shortcode=29290123456&message_id=ccc81279fcc048d1a6fcc52ed4c13255&message=Welcome+to+Chikka%21&client_id=abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz00&secret_key=001122334455aabbccddeeffgghh66778899iijjkkllmmnnooppqqrrssttuuvv
		//curl --data "message_type=SEND&mobile_number=639173859454&shortcode=29290170414&message_id=ccc81279fcc048d1a6fcc52ed4c13255&message=Welcome+to+Chikka%21&client_id=c6d706ab5729596f18ed600962cd06004288c03f3c46874a7523528d39477311&secret_key=60dc5cdd9621c51942f8637da7d41b4bf331779b114047f95df7f052f67fd9da" https://post.chikka.com/smsapi/request
		var postData  = 'message_type=SEND'+
						'&mobile_number=' + mobileNumber + 
						'&shortcode='+SHORT_CODE + 
						'&message_id=12345678901234567890123456789012'+
						'&message='+ message + 
						'&client_id='+ API_CLIENT_ID + 
						'&secret_key='+ API_SECRET;
	/*	var postData = {
	  		message_type : SEND,
	        mobile_number : mobileNumber, //"639181234567",
	        shortcode : SHORT_CODE,
	        message_id : "12345678901234567890123456789012",
	        message : message,
	        client_id : API_CLIENT_ID,
	        secret_key : API_SECRET
		});*/

		var options = {
			host: CHIKKA_API_URL,
			port: '80',
			path: API_SEND_REQUEST_URL,
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Content-Length': postData.length
			}
		};

		var req = http.request(options, function(res) {
			console.log('STATUS: ' + res.statusCode);
			console.log('HEADERS: ' + JSON.stringify(res.headers));
			res.setEncoding('utf8');
			res.on('data', function (chunk) {
				console.log('BODY: ' + chunk);
				//callback(null, chunk);
			});
			res.on('end', function () {
				console.log('success ');
				callback(null, "success");
			});
		});

		req.on('error', function (error) {
				console.log(`problem with request: ${error}`);
				callback(error);
		});
		console.log(postData);
		// write data to request body
		req.write(postData);
		req.end();
	}
}

module.exports = ChikkaApiService
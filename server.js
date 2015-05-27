// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var express    = require('express');		// call express
var app        = express(); 				// define our app using express

// APP CONFIGURATION ==================
// ====================================
config = {
	"port": process.env.PORT || 8080
}

app.use(express.static(__dirname + '/public'));

app.listen(config.port);
console.log('Magic happens on port ' + config.port);
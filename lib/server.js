
// Dependencies
var express = require( 'express' );
var app = module.exports = express();

// Define globals
global.PORT = process.env.PORT || 3000;
global.HOST = process.env.HOST || 'localhost';
global.PROTOCOL = process.env.PROTOCOL || 'http://';
global.SERVE = process.env.SERVE || [ PROTOCOL, HOST, ':', PORT ].join( '' );

// Listen server
app.listen( PORT, function (){
	console.log( 'API running on:', SERVE );
});
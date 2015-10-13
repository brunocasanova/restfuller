
// Dependencies
var app = require( './server' );
var database = require( './database' );
var bodyParser = require( 'body-parser' );

// Routes deendencies
var api = require( './routes/api' );
var error = require( './error' );

// Middlewares
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );
app.use( '/api', api );
app.use( error );

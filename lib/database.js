
// Dependencies
var mongoose = require( 'mongoose' );

// Export database
module.exports = mongoose.connect( 'mongodb://localhost/rest' );
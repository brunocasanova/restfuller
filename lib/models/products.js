
// Dependencies
var restful = require( './' );
var mongoose = restful.mongoose;

// Load Schema
var productSchema = new mongoose.Schema({
	name: String,
	sku: String,
	price: Number,
});

// Export Schema
module.exports = restful.model( 'Products', productSchema );
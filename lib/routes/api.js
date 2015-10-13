
// Dependencies
var Router = module.exports = require( './' );
var Product = require( '../models/products' );

// Routes
Product.methods([ 'get', 'post', 'put', 'delete' ]);
Product.register( Router, '/products' );



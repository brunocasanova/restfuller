
var output4x = [ 404, '404 Page not found!' ];
var output5x = [ 500, '500 Internal server error!' ];

var set = function ( code, msg ) {
	var status = code >= 500 && 1 || 0;
	var res = this[ status ].res;
	var stack = status && this[0].stack || '';

	res.set( 'Content-Type', 'text/plain' );
	res.status( code );
	res.send( stack && [ msg, '\n\n', stack ].join( '' ) || msg );
	res.end();
};

module.exports = [
	
	// Error 400
	function ( req, res, next ) {
		set.apply( arguments, output4x );
	},
	
	// Error 500
	function ( err, req, res, next ) {
		set.apply( arguments, output5x );
	},

];
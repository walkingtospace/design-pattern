var Decorator = function( object, ownInterfaces ) {
	Interface.ensureImplements( object, ownInterfaces );
	this.object = object;
};

Decorator.prototype.doDecorating = function( functionList ) {
	var object = this.object;
	console.log( object );

	for( var method in object ) {
		console.log( object[method] );
	}
}
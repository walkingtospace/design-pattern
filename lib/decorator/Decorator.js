var Decorator = function( object, ownInterfaces ) {
	Interface.ensureImplements( object, ownInterfaces );
	this.object = object;

	this.prototype = {};
	for( var method in object) {
		var methodName = eval(method);
		this.prototype[methodName] = function() {};
	}
};


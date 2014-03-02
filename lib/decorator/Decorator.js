var createDecorator = function( myInterface, decoratingMethods ) {
	var decorator = function( object ) {
		Interface.ensureImplements( object, myInterface );
		this.object = object;
	};
	
	for( var i=0; i< decoratingMethods.length; i++ ) {;
		for( var method in decoratingMethods[i] ) {
			for( var j=0; j< myInterface.methods.length ; j++ ) {
				decorator.prototype[method] = decoratingMethods[i][method];
			}
		}
	}

	return decorator;
};


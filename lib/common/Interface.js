
//Constructor
var Interface = function ( interfaceName, methods ) {
	if( arguments.length != 2 ) {
		throw new Error( "[Interface] Argument length is expected 2" );
	} 

	if( Object.prototype.toString.call( methods ) != '[object Array]' ) {
		throw new Error( "[Interface] methods shoule be array type of strings" );
	}

	this.interfaceName = interfaceName;
	this.methods = [];
	
	var length = methods.length;
	for( var i=0; i< length; i++ ) {
		this.methods.push( methods[i] );
	}		
};
 
//Strict check
Interface.ensureImplements = function ( object ) {
	var length = arguments.length;

	if ( length < 2 ) {
		throw new Error( "[Interface.ensureImplements] Argument length is expected more than 2" );
	}

	for ( var i=1; i<length; i++ ) {	//argument[0] == object, argument[1,2,3, ...] == interfaces
		var interfaceGroup = arguments[i];
		if ( interfaceGroup.constructor !== Interface ) {
			throw new Error( "[Interface.ensureImplements] wrong constructor- expected to be Interface type" );
		}

		var methodLength = interfaceGroup.methods.length;
		for ( var j=0 ; j<methodLength ; j++ ) {
			var method = interfaceGroup.methods[j];
			if ( !object[method] || typeof object[method] !== 'function' ) {
				throw new Error( "[Interface.ensureImplements] object " + "does not implement the " + interfaceGroup.name + " interface. Method " + method + " was not found." );
			}
		}
	}
};

Interface.implementInterface = function(object, methods) {
	for(var i=0; i< methods.length; i++) {;
		for(var method in methods[i]) {
			object.prototype[method] = methods[i][method];
		}
	}
};



//implementation of Prototype pattern
var createInstance = (function () { 
    function F() {} //instance
 
    return function ( proto ) {
        	F.prototype = proto; //inheritance
        
        	return new F();
    };
})();

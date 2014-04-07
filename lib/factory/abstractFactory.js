var abstractFactory = (function () {
 
	// Storage for our vehicle types
	var types = {};
 
	return {
		getItem: function ( type, customizations ) {
			var Vehicle = types[type];

			return (Vehicle ? new Vehicle(customizations) : null);
		},

		registerItem: function ( type, item ) {
			var proto = item.prototype;

			// only register classes that fulfill the item contract
			if ( proto.drive && proto.breakDown ) {
					types[type] = item;
			}

			return abstractFactory;
		}
	};
})();

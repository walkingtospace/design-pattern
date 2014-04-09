var abstractFactory = (function () {
	var types = {};
 
	return {
		getItem: function ( type, customizations ) {
			var item = types[type];

			return (item ? new item(customizations) : null);
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

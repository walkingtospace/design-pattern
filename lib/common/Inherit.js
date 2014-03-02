function Inherit( parent, children ) {
	for( var property in parent ) {
		try {
			children[property] = parent[property];
		} catch( err ) {
			console.log(err);
		}
	}
}
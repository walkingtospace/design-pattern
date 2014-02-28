function Subject() {
	this.observers = new Array();
}

Subject.prototype.addObserver = function(observer) {
	if(!observer.update) {
		throw new Error("add wrong observer object");
	}

	this.observers.push(observer);
}

Subject.prototype.removeObserver = function(observer) {
	var index = this.observers.indexOf(observer);

	this.observers.splice(index, 1); //Doesn't support at IE 8 or under
}

Subject.prototype.notifyObserver = function(callbackOrValue) {
	for(var i=0; i< this.observers.length ; i++) {
		this.observers[i].update(callbackOrValue);
	}
}
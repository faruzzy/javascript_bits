function Stack() {
	Queue.call(this);
}

Stack.prototype = new Queue();

Stack.prototype.push = function(e) {
	this.elements.unshift(e);
};

function Queue() {
	this.elements = new SLinkedList();
	Object.defineProperty(this, 'length', {
		get: function() {
			return this.elements.length;
		}.bind(this)
	});
}

Queue.prototype.isEmpty = function() {
	return this.elements.isEmpty();
};

Queue.prototype.push = function(e) {
	this.elements.add(e);
};

Queue.prototype.pop = function() {
	if (this.isEmpty())
		throw new Error('Empty Queue');
	return this.elements.pop();
};

Queue.prototype.peek = function() {
	if (this.isEmpty())
		throw new Error('Empty Queue');
	return this.elements.get(0);
};

Queue.prototype.toString = function() {
	this.elements.toString();
};

var queue = new Queue();
queue.push(1);
queue.push(3);
queue.push(4);
queue.push(5);
queue.toString();
queue.pop();
queue.pop();
queue.toString();
console.log(queue.peek());
queue.toString();

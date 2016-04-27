function Queue() {
	this.elements = [];
}

Queue.prototype.isEmpty = function(e) {
	return this.elements.length === 0;
};

Queue.prototype.push = function(e) {
	this.elements.push(e);
};

Queue.prototype.pop = function() {
	if (this.isEmpty())
		throw new Error('Empty Queue');
	return this.elements.shift();
};

Queue.prototype.peek = function() {
	if (this.isEmpty())
		throw new Error('Empty Queue');
	return this.elements[0];
};

Queue.prototype.toString = function() {
	var s = '';
	if (this.isEmpty())
		s = '[ ]';	
	s += '[' + this.elements.join(' ');
	s += ']';
	console.log(s);
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

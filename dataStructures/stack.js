function Stack() {
	Queue.call(this);
}

Stack.prototype = new Queue();

Stack.prototype.push = function(e) {
	this.elements.prepend(e);
};

var s = new Stack();
s.push(3);
s.push(4);
s.push(5);
s.toString();
s.pop();
console.log('stack length is: ' + s.length());

function Node(v) {
	this.prev = null;
	this.next = null;
	this.value = v || null;
}

function LinkedList() {
	this.head = this.tail = null;
	this.length = 0;
}

LinkedList.prototype.prepend = function(v) {
	if (!v) throw Error("Inserting null value");
	if (v.constructor !== Node) 
		v = new Node(v);
	(this.head === null) ? this.head = this.tail = v 
		: ( v.next = this.head, this.head.prev = v, this.head = v );
	this.length++;
};

LinkedList.prototype.append = function(v) {
	if (!v) throw Error('Inserting null value');
	if (v.constructor !== Node)
		v = new Node(v);
	if (this.head === null)
		this.head = this.tail = v;
	else {
		this.tail.next = v;
		v.prev = this.tail;
		this.tail = v;
	}
	this.length++;
};

LinkedList.prototype.remove = function(v) {
	if (this.head === null)
		throw Error('List is Empty');
	if (!v) 
		throw Error('Undefined Node');
	if (this.head === this.tail)
		this.head = this.tail = null;
	else {
		var u = v.prev;
		var w = v.next;
		u.next = v;
		v.prev = u;
		delete u.next;
	}
};

LinkedList.prototype.removeAtIndex = function(i) {
	if (this.head === null)
		throw Error('Empty List');
	if (i === null || typeof(i) === 'undefined')
		throw Error('Undefined index value');
	if (this.head === this.tail) {
		this.head = this.tail = null;
		this.length = 0;
	}
	if (i === 0 && this.length === 2) {
		this.head = this.tail;
	}

	if (i === 1 && this.length === 2) {
		this.tail = this.head;
	}

	var curr = this.head;
	var counter = 0;
	while (counter++ !== i)
		curr = curr.next;
	var u = curr.prev;
	var w = curr.next;
	delete curr;
	u.next = w;
	w.prev = u;
	this.lenght--;
};

LinkedList.prototype.print = function() {
	var s = '[ ',
		curr = this.head;
	while (curr !== null) {
		s += curr.value + ' ', 
		curr = curr.next;
	}
	s += ']';
	console.log(s);
};

var list = new LinkedList();
list.prepend(2);
list.print();
list.append(7);
list.print();
list.prepend(3);
list.print();
list.prepend(4);
list.print();
list.append(8);
list.print();

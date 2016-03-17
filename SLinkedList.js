function Node(data) {
	this.data = data;
	this.next = null;
}

function LinkedList() {
	this.head = this.tail = null;
	this.size = 0;
}

var p = LinkedList.prototype;

p.isEmpty = function() {
	return this.size === 0;
};

p.clear = function() {
	this.head = this.tail = 0;
	this.size = 0;
};

p.insertFirst = function(data) {
	var n = new Node(data);
	if (this.isEmpty()) {
		this.head = this.tail = n;
	} else {
		n.next = this.head;
		this.head = n;
	}
	this.size++;
};

p.insertLast = function(data) {
	var n = new Node(data);
	if (this.isEmpty()) {
		this.head = this.tail = n;
	} else {
		this.tail.next = n;
		this.tail = n;
	}
	this.size++;
};

p.removeFirst = function() {
	if (this.isEmpty()) throw new Error('Empty list');
	this.head = this.head.next;
	this.size--;
};

p.removeLast = function() {
	if (this.isEmpty()) throw new Error('Empty list');
	var curr = this.head;
	while (curr.next != this.tail) {
		curr = curr.next;
	}
	curr.next = null;
	this.tail = curr;
	this.size--;
};

p.removeAtIndex = function(index) {
	if (this.isEmpty()) throw new Error('Empty list');
	if (index < 0 || index > this.size - 1) throw new Error('Index out of bound');
	if (this.size === 1) this.clear();
	if (this.size === 2) {
		if (index === 0) {
			var v = this.head.next;
			head = tail = v;
		} else {
			this.tail = this.head;
		}
	} else {
		var c = 0;
		var curr = this.head;
		while (c !== index - 1) {
			curr = curr.next;
			c++;
		}
		curr.next = curr.next.next;
	}
	this.size--;
};

p.removeAfter = function(data) {
	if (this.isEmpty()) {
		throw new Error('Empty list');
	} else {
		var curr = this.head;
		while (curr.data !== data) {
			curr = curr.next;
		}
		curr.next = curr.next.next;
	}
};

p.insertAfter = function(data, value) {
	var node = new Node(value);
	if (!this.isEmpty()) {
		var curr = this.head;
		while (curr.data !== data) {
			curr = curr.next;
		}
		var v = curr.next;
		curr.next = node;
		node.next = v;
		this.size++;
	}
};

p.print = function() {
	if (this.isEmpty()) {
		console.log('[ ]');
	} else {
		var s = '[ ';
		var current = this.head;
		while (current !== null) {
			s += current.data + ' ';
			current = current.next;
		}
		s += ']';
		console.log(s);
	}
};

var list = new LinkedList();
list.insertFirst('roland');
list.print();
list.insertFirst('junior');
list.print();
list.removeFirst();
list.print();
list.insertLast('rachel');
list.print();
list.insertLast('rhonda');
list.print();
list.insertLast('rajesh');
list.print();
list.removeFirst();
list.print();
list.removeLast();
list.print();
list.insertLast('ronaldo');
list.print();
list.insertAfter('rhonda', 'Pinga');
list.print();
list.removeAtIndex(0);
list.print();

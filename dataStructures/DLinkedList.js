function DNode() {
	this.value = null;
	this.prev = null;
	this.next = null;

	if ( arguments[0] ) this.value = arguments[0];
	if ( arguments[1] ) this.prev = arguments[1];
	if ( arguments[2] ) this.next = arguments[2];
}

function DLinkedList() {
	this.header = new DNode();
	this.trailer = new DNode(null, this.header, null);
	this.header.next = this.trailer;
	this.length = 0;
}

DLinkedList.prototype = {
	constructor: DLinkedList,

	isEmpty: function() {
		return this.length === 0;
	},

	addFirst: function( value ) {
		var node = new DNode(value);
		if ( this.isEmpty() ) {
			this.header.next = node;
			node.prev = this.header;

			this.trailer.prev = node;
			node.next = this.trailer;
		} else {
			var v = this.header.next;

			this.header.next = node;
			node.prev = this.header;

			node.next = v;
			v.prev = node;
		}
		this.length++;
	},

	addLast: function( value ) {
		var node = new DNode(value);
		if ( this.isEmpty() ) {
			this.header.next = node;
			node.prev = this.header;

			node.next = this.trailer;
			this.trailer.prev = node;
		} else {
			var u = this.trailer.prev;
			u.next = node;
			node.prev = u;
		}
		this.length++;
	},

	removeFirst: function() {
		if ( this.isEmpty() ) {
			throw new Error('Empty List');
		} else {
			var u = this.header.next;
			var v = u.next;
			this.header.next = v;
			v.prev = this.header;
			u.next = null;
			u.prev = null;
			this.length--;
		}
	},

	removeLast: function() {
		if ( this.isEmpty() ) {
			throw new Error('Empty List');
		} else {
			var v = this.trailer.prev;
			var u = v.prev;
			u.next = this.trailer;
			this.trailer.prev = u;
			v.prev = null;
			v.next = null;
			this.length--;
		}
	},

	print: function() {
		var s = '[ ';
		var current = this.header.next;
		while ( current && current.value !== null ) {
			s += current.value + ' ';
			current = current.next;
		}
		s += ']';
		console.log(s);
	}
};


var list = new DLinkedList();
list.addFirst(1);
list.print();
list.addFirst(2);
list.print();
list.addLast(7);
list.print();
list.removeFirst();
list.print();
list.removeLast();
list.print();
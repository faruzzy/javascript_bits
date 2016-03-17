function DNode(value) {
	this.value = value;
	this.next = null;
	this.prev = null;
}

function DLinkedList() {
	this.header = new DNode(null);
	this.trailer = new DNode(null);

	this.header.next = null;
	this.header.prev = null;

	this.trailer.next = null;
	this.trailer.prev = this.header;

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

	print: function() {
		var s = '[ ';
		var current = this.header.next;
		while ( current.value !== null ) {
			s += current.value + ' ';
			current = current.next;
		}
		s += ']';
		console.log(s);
	}
};


var list = new DLinkedList();
list.addFirst(1);
list.addFirst(2);
list.addLast(7);
list.print();
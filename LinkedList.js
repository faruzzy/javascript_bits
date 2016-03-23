function Node(v) {
	this.prev = this.next = null;
	this.value = v || null;
}

function LinkedList() {
	this.first = this.last = null;
	this.length = 0;
}

LinkedList.prototype.append = function(u) {
	if ( u === null )
		throw Error('Node is null');
	this.first === null ? this.first = u : ( u.prev = this.last, u.next = null, this.last.next = u );

	this.last = u;
	this.length++;
};

LinkedList.prototype.insertAfter = function(u, v) {
	if ( u === null || v === null )
		throw Error('Node is null!');
	v.prev = u;
	v.next = u.next;
	u.next.prev = v;
	u.next = v;
	v.prev === this.last && ( this.last = v );
	this.length++;
};

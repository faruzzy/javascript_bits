var BinarySearchTree = function() {
	this.root = null;
};

BinarySearchTree.prototype = {
	constructor: BinarySearchTree,

	contains: function(value) {
		var current = this.root,
			found = false;

		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}
		
		return found;
	}, 

	add: function(value) {
		var node = {
			value: value,
			left: null,
			right: null
		};

		if (this.root === null) {
			this.root = node;
		} else {
			var current = this.root;
			while (true) {
				if (value < current.value) {
					if (current.left) {
						current = current.left;
					} else {
						current.left = node;
						break;
					}
				} else {
					if (current.right) {
						current = current.right;
					} else {
						current.right = node;
						break;
					}
				}
			}
		}
	},

	traverse: function(fn) {
		function inOrder(node) {
			if (node.left !== null) {
				inOrder(node.left);
			}

			fn.call(this, node);	

			if (node.right !== null) {
				inOrder(node.right);
			}
		}

		inOrder(this.root);
	},

	size: function() {
		var length = 0;
		this.traverse(function(node) {
			length++;
		});
		
		return length;
	},

	toArray: function() {
		var arr = [];
		this.traverse(function(node) {
			arr.push(node.value);
		});
		
		return arr;
	},

	toString: function() {
		return this.toArray().toString();
	}
};

var tree = new BinarySearchTree();

tree.add(8);
tree.add(4);
tree.add(9);
tree.add(10);
tree.add(1);
tree.add(3);

console.log('contains 7: ', tree.contains(7));
console.log('contains 3: ', tree.contains(3));
console.log('tree size: ', tree.size());
console.log('to array: ', tree.toArray());
console.log('to string: ', tree.toString());

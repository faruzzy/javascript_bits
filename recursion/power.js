var power = function(x, y) {
	if (y === 1) return x;
	if (y === 0) return 1;
	if (y > 1) {
		return x * power(x, y - 1);
	} else {
		return (1/x) * power(x, y + 1);
	}
};

console.log('2 ^ 0: ', power(2, 0));
console.log('2 ^ 1: ', power(2, 1));
console.log('2 ^ 2: ', power(2, 2));
console.log('2 ^ 3: ', power(2, 3));
console.log('3 ^ 2: ', power(3, 2));
console.log('2 ^ -2: ', power(2, -2));

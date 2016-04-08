var factorial = function(n) {
	return (n === 1) ? 1 : n * factorial(n - 1);
};

console.log('factorial of 5 ', factorial(5));
console.log('factorial of 4 ', factorial(4));
console.log('factorial of 1 ', factorial(1));
// print the list of fibonacci numbers up to n
function fibonacciList(count, n, prev, next, list) {
	if (count < n) {
		if (count === 0) {
			list.push(1);
			fibonacciList(++count, n, prev, next, list);
		} else if (count === 1) {
			list.push(1);
			fibonacciList(++count, n, prev, next, list);
		} else {
			var t = next + prev;
			list.push(t);
			prev = next;
			next = t;
			fibonacciList(++count, n, prev, next, list);
		}
	}
	return list.join();
}

// cleaner
function fibonacciList2(n) {
	function fibonacci(n) {
		if (n === 1 || n === 2) return 1;
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
	var list = [];
	for (var i = 1; i <= n; i++)
		list.push(fibonacci(i));
	return list.join();
}

console.log(fibonacciList(0, 10, 1, 1, []));
console.log(fibonacciList2(10));
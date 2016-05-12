// print the list of fibonacci numbers up to n
function fibonacciList(count, n, prev, next, list) {
	if (count < n) {
		if (count === 0) {
			list.push(0);
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
console.log(fibonacciList(0, 10, 0, 1, []));
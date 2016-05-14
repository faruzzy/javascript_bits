function arrangeEvenBeforeOdd(array, count) {
	function isEven(n) { return n % 2 === 0; }

	function swap(array, a, b) {
		var temp = array[a];
		array[a] = array[b];
		array[b] = temp;
	}

	if (count !== array.length) {
		if (!isEven(array[count])) {
			for (var i = count + 1; i < array.length; i++) {
				if (isEven(array[i])) {
					swap(array, count, i);
					break;
				}
			}
		}
		arrangeEvenBeforeOdd(array, ++count);
	}
}

var array = [9, 7, 5, 3, 2, 4, 6, 8, 10];
console.log(array);
arrangeEvenBeforeOdd(array, 0);
console.log(array);
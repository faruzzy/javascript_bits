function quickSort(array) {
	var pivot = array.length >> 1;
	var pivotValue = array[pivot];
	var left = [];
	var right = [];

	if (array.length <= 1) return array;
	array = array.slice(0, pivot).concat(array.slice(pivot + 1));
	for (var i = 0; i < array.length; i++) {
		if (array[i] < pivotValue) {
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}

	return (quickSort(left)).concat([pivotValue], quickSort(right));
}

console.log(quickSort([7, 9, 1, 3, 10, 4, 5, 2, 6]));
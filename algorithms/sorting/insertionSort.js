var insertionSort = function(array) {
	for (var i = 1, len = array.length; i < len; i++) {
		var j = i;
		while (j > 0 && array[j - 1] > array[j]) {
			var temp = array[j - 1];
			array[j - 1] = array[j];
			array[j] = temp;
			j--;
		}
	}
	return array;
};

var array1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var array2 = [0, -2, -1, 10, 9, 5, 4, 1, 2];
console.log('insertion sort: ', insertionSort(array1));
console.log('insertion sort: ', insertionSort(array2));

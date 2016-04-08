var selectionSort = function(array) {
	function swap(i, j) {
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	for (var i = 0, len = array.length; i < len; i++) {
		var min = i;
		for (var j = i + 1; j < len; j++)
			if (array[j] < array[min])
				min = j;
		swap(i, min);
	}
	return array;
};

var array1 = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
var array2 = [-2, 20, 2, 10, 9, 5, 1, -5, 0, 11];
console.log('selection Sort: ', selectionSort(array1));
console.log('selection Sort: ', selectionSort(array2));
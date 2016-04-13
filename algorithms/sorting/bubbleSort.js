var bubbleSort = function(array) {
	function swap(array, i, j) {
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	for (var i = 0, len = array.length; i < len; i++)
		for (var j = 0; j < len; j++)
			if (array[j] > array[j + 1])	
				swap(array, j, j + 1);
	return array;
};

var array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log('Before sorting: ', array);
console.log('After sorting: ', bubbleSort(array));
var bubbleSort = function(array) {
	if (arguments.length === 0 || Array.isArray(array)) {
		throw new Error();
	}

	function swap(array, i, j) {
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	for (var i = 0, len = array.length; i < len; i++) {
		var changed = false;
		for (var j = 0; j < len; j++) {
			if (array[j] > array[j + 1]) {
				hasChanged = true;
				swap(array, j, j + 1);
			}
		}

		if (!hasChanged) {
			return array;
		}
	}
	return array;
};

var array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log('Before sorting: ', array);
console.log('After sorting: ', bubbleSort(array));
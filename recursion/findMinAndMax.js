function findMinAndMax(array, i, min, max) {
	if (i < array.length) {
		if (array[i] < min) min = array[i];
		if (array[i] > max) max = array[i];
		return findMinAndMax(array, ++i, min, max);
	} 

	return [min, max];
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findMinAndMax(array, 1, array[0], array[0]));
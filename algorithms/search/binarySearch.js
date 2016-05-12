var binarySearch = function(array, value) {
	if (array.constructor !== Array)
		throw new Error('Expecting an array as the argrument');

	if (!Number.isInteger(value))
		throw new Error('Expecting an integer for the second argument');

	if (array.length === 0) 
		return -1;

		var low = 0, 
			high = array.length - 1;

	while (low <= high) {
		var mid = Math.floor((low + high) / 2);
		if (array[mid] === value) {
			return mid;
		} else if (array[mid] < value) {
			low = mid + 1;	
		} else {
			high = mid - 1;
		}
	}	
	
	return -1;
};

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(array, 20));
console.log(binarySearch(array, 3));
console.log(binarySearch(array, 4));

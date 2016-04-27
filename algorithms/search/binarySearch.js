var binarySearch = function(array, value) {
	if (array.constructor !== Array)
		throw new Error('Expecting an array as the argrument');

	if (array.length === 0) 
		return -1;

		var low = 0, 
			high = array.length - 1;

	while (low < high) {
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

var array = [10, 2, 4, 7, 8, 5, 1, 3, 6];

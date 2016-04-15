var mergeSort = function(array) {
	function merge(left, right) {
		var l = 0,
			r = 0,
			retArr = [];

		while (retArr.length < (left.length + right.length)) {
			retArr.push((left[l] < right[r]) ? left[l++] : right[r++]);
		}
		return retArr;
	}

	if (arguments.length === 0 || !Array.isArray(array)) 
		throw new Error();

	if (array.length > 1) {
		var mid = array.length >> 1;
		var left = mergeSort(array.slice(0, mid));
		var right = mergeSort(array.slice(mid));
		return merge(left, right);
	}
	return array;
};

console.log(mergeSort([3, 2, 9, 10, 1, 7, 8, 5, 3, 4, 6]));

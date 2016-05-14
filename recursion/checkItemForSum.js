var checkItemForSum = function(array) {
	for (var k = 3, len = array.length; k < len; k++) {
		for (var i = 0; i < k; i++) {
			for (var j = i + 1; j < k; j++)
				if (array[i] + array[j] === array[k]) 
					return true;
		}
	}
	return false;
};

var checkItemForSumRecursive = function(array, current, bool) {
	if (current !== array.length) {
		for (var i = 0; i < current; i++) 
			for (var j = i + 1; j < current; j++) 
				if (array[i] + array[j] === array[current]) 
					return true;
		return checkItemForSumRecursive(array, ++current, false);
	}
	return false;
};

var falseArray = [2, 4, 8, 11, 9, 1, 0];
var trueArray = [2, 4, 3, 7, 10, 20, 8];

console.log('should be false:', checkItemForSum(falseArray));
console.log('should be true:', checkItemForSum(trueArray));

console.log('should be false:', checkItemForSumRecursive(falseArray, 2, false));
console.log('should be true:', checkItemForSumRecursive(trueArray, 2, false));

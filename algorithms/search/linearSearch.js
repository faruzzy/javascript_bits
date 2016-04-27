var linearSearch = function(array, value) {
	for (var i = 0; i < array.length; i++)
		if (array[i] === value)
			return i;
	return -1;
};

var array = [10, 3, 2, 1];
console.log(linearSearch(array, 20));
console.log(linearSearch(array, 3));
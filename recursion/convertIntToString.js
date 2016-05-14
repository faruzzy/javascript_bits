function convertIntToString(value, res) {
	if (!value) return res;
	value = String(value);	
	if (value) {
		return value.charAt(0) + convertIntToString(parseInt(value.substr(1)), res);
	}
}

console.log(convertIntToString(12437, ''));
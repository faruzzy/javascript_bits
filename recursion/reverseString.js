function reverse(str) {
	return (str.length === 0) ? '' : reverse(str.substr(1)) + str.charAt(0);
}

console.log(reverse('roland'));
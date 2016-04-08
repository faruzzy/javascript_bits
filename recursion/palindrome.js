// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward
// Check if string is Palindrome
var palindrome = function(str) {
	if (str.length === 0 || str.length === 1) return true;
	if (str.charAt(0) !== str.charAt(str.length - 1)) return false;
	return palindrome(str.slice(1, -1));
};

console.log('Is "motor" a palindrome: ', palindrome('motor'));
console.log('Is "rotor" a palindrome: ', palindrome('rotor'));
console.log('Is "ac" a palindrome: ', palindrome('ac'));
console.log('Is "cc" a palindrome: ', palindrome('cc'));
console.log('Is "" a palindrome: ', palindrome(''));
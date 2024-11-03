/**Steps Explained:
Normalize the Input:

javascript
Copy code
let cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
inputString.toLowerCase(): Converts the input string to lowercase to ensure the comparison is case-insensitive (e.g., "Madam" becomes "madam").
.replace(/[^a-z0-9]/g, ''): Removes all non-alphanumeric characters (like spaces, punctuation, etc.) using a regular expression.
[^a-z0-9]: Matches any character that is not a lowercase letter or digit.
g: Global flag ensures all non-alphanumeric characters are replaced.
Example:

Input: "A man, a plan, a canal: Panama"
cleanedString: "amanaplanacanalpanama"
Check if the String is a Palindrome:

javascript
Copy code
return cleanedString === cleanedString.split('').reverse().join('');
cleanedString.split(''): Splits the string into an array of characters.
.reverse(): Reverses the array of characters.
.join(''): Joins the reversed array back into a string.
The function checks if the cleanedString is equal to its reversed version. If they are the same, the string is a palindrome, and the function returns true; otherwise, it returns false.
Example:

For "madam", the reversed string is also "madam", so the function returns true.
For "hello", the reversed string is "olleh", so the function returns false.
Example Usage:
console.log(isPalindrome("madam"));
Output: true (because "madam" reads the same forwards and backwards)
console.log(isPalindrome("racecar"));
Output: true (because "racecar" is a palindrome)
console.log(isPalindrome("hello"));
Output: false (because "hello" is not a palindrome) */
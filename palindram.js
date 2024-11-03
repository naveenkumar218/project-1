function isPalindrome(inputString) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    let cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Check if the string is equal to its reverse
    return cleanedString === cleanedString.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
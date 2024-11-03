function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}


console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));

/**Detailed Steps
Function Declaration:

function reverseString(str) declares a function named reverseString that takes one argument, str, which is the string to be reversed.
Initialization:

let reversed = ''; initializes an empty string variable called reversed. This variable will hold the characters in reverse order as we build the result.
Loop Setup:

for (let i = str.length - 1; i >= 0; i--) sets up a for loop that starts from the last character of the string (str.length - 1) and moves backward to the first character (i >= 0).
str.length - 1 gives the index of the last character in the string. For "hello", str.length is 5, so the index of the last character is 4 (zero-based index).
i-- means i is decremented by 1 after each iteration, so the loop goes in reverse order.
Appending Characters:

reversed += str[i]; appends the character at the current index i to the reversed string.
For "hello":
When i = 4, str[4] is "o", so reversed becomes "o".
When i = 3, str[3] is "l", so reversed becomes "ol".
When i = 2, str[2] is "l", so reversed becomes "oll".
When i = 1, str[1] is "e", so reversed becomes "olle".
When i = 0, str[0] is "h", so reversed becomes "olleh".
Return Statement:

return reversed; returns the reversed string after the loop completes. For the input "hello", it returns "olleh".
Function Call:

console.log(reverseString("hello")); calls the function with the string "hello" and prints the returned result to the console, which is "olleh". */
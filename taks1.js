function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz"); // Multiples of both 3 and 5
        } else if (i % 3 === 0) {
            console.log("Fizz"); // Multiples of 3
        } else if (i % 5 === 0) {
            console.log("Buzz"); // Multiples of 5
        } else {
            console.log(i); // Print the number if not a multiple of 3 or 5
        }
    }
}

// Run the function
fizzBuzz();

/**Explanation:
Loop through numbers 1 to 100:

for (let i = 1; i <= 100; i++): The loop iterates from 1 to 100.
Check conditions:

i % 3 === 0 && i % 5 === 0:
Checks if i is divisible by both 3 and 5 (e.g., 15, 30, 45...). If true, print "FizzBuzz".
i % 3 === 0:
Checks if i is divisible by 3 (e.g., 3, 6, 9...). If true, print "Fizz".
i % 5 === 0:
Checks if i is divisible by 5 (e.g., 5, 10, 20...). If true, print "Buzz".
else:
If none of the above conditions are met, print the number itself.
Order of conditions:

It's important to check the i % 3 === 0 && i % 5 === 0 condition first, because if we check i % 3 === 0 or i % 5 === 0 first, numbers that are multiples of both 3 and 5 (e.g., 15) would only print "Fizz" or "Buzz" instead of "FizzBuzz". */
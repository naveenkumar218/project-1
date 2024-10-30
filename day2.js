// 1. Function Declaration and Function Expression

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Function Expression
const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};
console.log(sayGoodbye("Bob"));


// 2. Arrow Functions

// Traditional function to calculate square
function square(num) {
    return num * num;
}
console.log(square(5));

// Converted to Arrow Function
const squareArrow = (num) => num * num;
console.log(squareArrow(5));


// 3. Parameters and Return Values

// Function with multiple parameters and return values
function calculateArea(width, height) {
    return width * height;
}
let area = calculateArea(5, 10);
console.log("Area:", area);


// 4. Higher-Order Functions

// Higher-order function that takes a function as a parameter
function applyOperation(a, b, operation) {
    return operation(a, b);
}

// Function to add two numbers
function add(x, y) {
    return x + y;
}

// Function to multiply two numbers
function multiply(x, y) {
    return x * y;
}

console.log("Addition:", applyOperation(5, 3, add));
console.log("Multiplication:", applyOperation(5, 3, multiply));


// 5. Closures

function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createCounter();
console.log(counter2());
console.log(counter2());
// 1. Function Declaration and Function Expression

// Function Declaration for adding item to the cart
function addItem(cart, item, price) {
    cart.push({ item, price });
    return `${item} added to cart.`;
}

// Function Expression to calculate the total price
const calculateTotal = function(cart) {
    return cart.reduce((total, currentItem) => total + currentItem.price, 0);
};

// Initialize shopping cart array
let shoppingCart = [];
console.log(addItem(shoppingCart, "Laptop", 800)); // Laptop added to cart
console.log(addItem(shoppingCart, "Headphones", 50)); // Headphones added to cart


// 2. Arrow Functions

// Traditional function to apply a discount
function applyDiscount(total, discount) {
    return total - (total * discount) / 100;
}

// Converted to Arrow Function
const applyDiscountArrow = (total, discount) => total - (total * discount) / 100;

let total = calculateTotal(shoppingCart);
console.log("Total before discount:", total); // Output: Total before discount
console.log("Total after discount:", applyDiscountArrow(total, 10)); // Apply 10% discount


// 3. Parameters and Return Values

// Function with multiple parameters to calculate final total with discount and tax
function calculateFinalTotal(cart, discount, taxRate) {
    let total = calculateTotal(cart);
    let discountedTotal = applyDiscountArrow(total, discount);
    return discountedTotal + (discountedTotal * taxRate) / 100;
}

console.log("Final Total:", calculateFinalTotal(shoppingCart, 10, 5)); // 10% discount and 5% tax


// 4. Higher-Order Functions

// Higher-order function to apply custom discounts based on conditions
function conditionalDiscount(cart, discountFunction) {
    let total = calculateTotal(cart);
    return discountFunction(total);
}

// Custom discount function for big-spending customers
function bigSpenderDiscount(total) {
    return total >= 500 ? applyDiscountArrow(total, 20) : total; // 20% off if total >= 500
}

console.log("Total for Big Spender:", conditionalDiscount(shoppingCart, bigSpenderDiscount));

    
// 5. Closures

// Closure to keep track of total items added to the cart
function itemCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counter = itemCounter();
console.log("Items added:", counter()); // Output: 1
console.log("Items added:", counter()); // Output: 2
console.log("Items added:", counter()); // Output: 3
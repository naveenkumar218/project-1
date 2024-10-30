// Task 1: Create and Manipulate Objects
const cart = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName);
    },
    viewCart() {
        return this.items;
    }
};

// Adding items to the cart
cart.addItem({ name: "Apple", price: 0.5 });
cart.addItem({ name: "Banana", price: 0.3 });
cart.addItem({ name: "Orange", price: 0.8 });

console.log("Cart Items:", cart.viewCart()); // View all items in the cart

// Task 2: Work with Arrays
const totalCost = cart.viewCart().reduce((total, item) => total + item.price, 0);
console.log("Total Cost:", totalCost); // Calculate total cost

// Task 3: Practice Destructuring Assignment
const [firstItem, secondItem] = cart.viewCart();
console.log(`First Item: ${firstItem.name} - $${firstItem.price}`);
console.log(`Second Item: ${secondItem.name} - $${secondItem.price}`);

// Task 4: Utilize Spread and Rest Operators
function checkout(user, ...itemNames) {
    const purchasedItems = itemNames.map(name => {
        const item = cart.items.find(i => i.name === name);
        return item ? item.name : `Item ${name} not found.`;
    });
    return `${user.name} purchased: ${purchasedItems.join(", ")}`;
}

// Creating a user object
const user = { name: "John Doe", email: "john@example.com" };

// Using the rest operator to checkout
console.log(checkout(user, "Apple", "Banana", "Grapes")); // Grapes will not be found


/**Explanation of Each Task
Create and Manipulate Objects:

The cart object manages the shopping cart, allowing items to be added, removed, and viewed.
Work with Arrays:

The totalCost variable calculates the total price of all items in the cart using the reduce() method.
Practice Destructuring Assignment:

The first two items in the cart are destructured for easier access to their properties.
Utilize Spread and Rest Operators:

The checkout function uses the rest operator to accept a variable number of item names, checks their availability in the cart, and returns a message summarizing the purchase.
Conclusion
This simple shopping cart program provides a clear and concise demonstration of the key concepts of objects, arrays, destructuring, and spread/rest operators in JavaScript. You can easily modify it by adding more features, such as updating item quantities or implementing discounts!






 */
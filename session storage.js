// Storing data in Session Storage
sessionStorage.setItem("sessionID", "abc123"); // Set a session ID
sessionStorage.setItem("cartItems", JSON.stringify(["item1", "item2"])); // Set cart items as a JSON string

// Retrieving data from Session Storage
const sessionID = sessionStorage.getItem("sessionID");
const cartItems = JSON.parse(sessionStorage.getItem("cartItems")); // Parse JSON string back to array

console.log(sessionID); // Output: "abc123"
console.log(cartItems); // Output: ["item1", "item2"]

// Removing data from Session Storage
sessionStorage.removeItem("sessionID"); // Remove the session ID

// Clear all Session Storage
sessionStorage.clear(); // Clear all data stored in Session Storage
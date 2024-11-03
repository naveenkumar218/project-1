// Storing data in Local Storage
localStorage.setItem("theme", "dark"); // Set a theme preference
localStorage.setItem("username", "JohnDoe"); // Set username

// Retrieving data from Local Storage
const theme = localStorage.getItem("theme");
const username = localStorage.getItem("username");

console.log(theme); // Output: "dark"
console.log(username); // Output: "JohnDoe"

// Removing data from Local Storage
localStorage.removeItem("theme"); // Remove the theme preference

// Clear all Local Storage
localStorage.clear(); // Clear all data stored in Local Storage
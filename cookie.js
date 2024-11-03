// Function to set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration date
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/"; // Set cookie
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "="; // Create the name equality string
    const ca = document.cookie.split(';'); // Split all cookies into an array
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length); // Trim whitespace
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length); // Return cookie value
    }
    return null; // Cookie not found
}

// Function to delete a cookie
function deleteCookie(name) {
    setCookie(name, "", -1); // Set the expiration date to a past date
}

// Usage
setCookie("username", "JohnDoe", 7); // Set cookie for 7 days
console.log(getCookie("username")); // Output: "JohnDoe"
deleteCookie("username"); // Delete the cookie
console.log(getCookie("username")); // Output: null
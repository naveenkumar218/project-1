// 1. Using Callbacks
function processUserInput(input, callback) {
    console.log("Processing user input...");
    setTimeout(() => {
        callback(input.toUpperCase());
    }, 1000);
}

// Callback usage example
processUserInput("hello", function(result) {
    console.log("Callback result:", result); // Output: "Callback result: HELLO"
});

// 2. Creating and Handling Promises
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 10) {
                resolve("Number is greater than 10");
            } else {
                reject("Number is less than or equal to 10");
            }
        }, 1000);
    });
}

// Handling Promises
checkNumber(15)
    .then(response => {
        console.log("Promise resolved:", response); // Output if num > 10: "Promise resolved: Number is greater than 10"
    })
    .catch(error => {
        console.error("Promise rejected:", error); // Output if num <= 10: "Promise rejected: Number is less than or equal to 10"
    })
    .finally(() => {
        console.log("Promise check completed.");
    });

// 3. Using Async/Await
async function checkNumberAsync(num) {
    try {
        const response = await checkNumber(num);
        console.log("Async/Await response:", response);
    } catch (error) {
        console.error("Async/Await error:", error);
    } finally {
        console.log("Async/Await process completed.");
    }

    // Call the async function
    checkNumberAsync(5); // Test with a number to trigger resolve or reject

    // 4. Using Fetch API
    async function fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log("Fetched data:", data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            console.log("Fetch API call completed.");
        }
    }

    // Call the Fetch function with an example API
    fetchData('https://jsonplaceholder.typicode.com/posts/1')
};
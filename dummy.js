function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { user: "John Doe" }; // Simulated data
            resolve(data); // Resolve with data
        }, 1000);
    });
}

fetchData('https://api.example.com')
    .then(data => console.log(data)) // Logs the data when promise resolves
    .catch(error => console.error(error)); // Logs error if promise rejects




async function getData() {
    try {
        const data = await fetchData('https://api.example.com');
        console.log(data); // Logs data once fetched
    } catch (error) {
        console.error(error); // Catches and logs any errors
    }
}

getData();
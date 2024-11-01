// main.js

import { Animal, Dog, fetchAnimalDetails } from './animal.js';

async function displayAnimals() {
    // Create instances of Animal and Dog
    const animal = new Animal('Cat', 'meow');
    const dog = new Dog('Buddy', 'Golden Retriever');

    // Display basic details with template literals
    console.log(`Animal: ${animal.getDetails()}`);
    console.log(`Dog: ${dog.getDetails()}`);

    // Use async/await to fetch details asynchronously
    try {
        const animalDetails = await fetchAnimalDetails(animal);
        console.log(animalDetails); // Fetched details for Cat

        const dogDetails = await fetchAnimalDetails(dog);
        console.log(dogDetails); // Fetched details for Buddy
    } catch (error) {
        console.error(error);
    }
}

// Run the function
displayAnimals();
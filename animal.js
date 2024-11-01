// animalUtils.js

// Export Animal class
export class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    getDetails() {
        return `This is a ${this.name} and it makes a ${this.sound} sound.`;
    }
}

// Export Dog class (inherits from Animal)
export class Dog extends Animal {
    constructor(name, breed) {
        super(name, "bark");
        this.breed = breed;
    }

    getDetails() {
        return `This is a ${this.breed} named ${this.name} and it barks.`;
    }
}

// Function to simulate fetching animal details (uses Promises)
export function fetchAnimalDetails(animal) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Fetched details: ${animal.getDetails()}`);
        }, 500); // Simulated delay
    });
}
// HW4 – JavaScript Foundations
// Marierose Sinanian


// Exercise 1: Formatting and Naming (Code Correction)
let thisIsANewVariable = 10;
if (thisIsANewVariable === 10) {
  // Code block executes if condition is true
  console.log("Variable equals 10");
}

// Exercise 2: Defining Core Data Types
let greetingMessage = `Hello, world!`; // string using template literal
let priceValue = 19.99; // number (float)
let isAvailable = true; // boolean

// Exercise 3: Single-Line Comments
let currentScore = 95; // Stores the user's current score in a game

// Exercise 4: Equality Comparison
console.log('100' == 100);  // true (value equality)
console.log('100' === 100); // false (strict equality – type must also match)


// ----------------------------
// Section 2: Conditionals and Control Flow
// ----------------------------

// Exercise 5: Ternary Operator
let isWeekend = false;
let schedule = isWeekend ? "Day off" : "Work day";
console.log(schedule);

// Exercise 6: If/Else Structure
let userAge = 16;
if (userAge >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

// Exercise 7: Logical AND Operator
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
  console.log("Ready to process");
}

// Exercise 8: For Loop
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration number: ${i}`);
}

// Exercise 9: Loop Control with Break
for (let i = 0; i < 10; i++) {
  if (i === 7) {
    console.log("Reached 7, breaking loop");
    break;
  }
  console.log(`Current number: ${i}`);
}

// Exercise 10: Ensuring Execution (do while)
let counter = 10;
do {
  console.log("Running once");
} while (counter < 0);


// ----------------------------
// Section 3: Functions and Data Structures
// ----------------------------

// Exercise 11: Function Definition
function calculateArea(width, height) {
  return width * height;
}
let resultArea = calculateArea(5, 10);
console.log(`Area = ${resultArea}`);

// Exercise 12: Array Manipulation
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape'); // Add 'Grape' to end
fruitList.shift();       // Remove first item ('Apple')
console.log(fruitList.indexOf('Banana')); // Log index of 'Banana'

// Exercise 13: Array Copying
let originalData = [1, 2, 3, 4, 5];
let clonedData = originalData.slice();
console.log(clonedData);
// slice() creates a *shallow copy* – if the array contains objects,
// their references are copied, not the actual objects.

// Exercise 14: Object Constructor
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

// Exercise 15: Object Instantiation
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");

let animalArray = [dog, cat];
console.log(animalArray);
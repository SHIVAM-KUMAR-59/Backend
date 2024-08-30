
// Importing people.js file into this file
const arr = require('./people');
console.log(arr.people);
console.log(arr.age);

// Instead of importing the whole object into one variable, we can extract them properly by destructuring
const { people, age } = require('./people');
console.log(people);
console.log(age);
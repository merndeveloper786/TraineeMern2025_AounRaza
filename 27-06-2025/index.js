//Arrays
const numbers = [1, 2, 3, 4, 5];
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const fruits = ["apple", "banana", "cherry"];

// Accessing elements
console.log(numbers[0]);
console.log(fruits[1]);

// Modifying elements
numbers[2] = 10;
console.log(numbers);

//typeof arrays
console.log(typeof numbers); // "object"

// Adding elements to last of the array
fruits.push("date");
console.log(fruits);

// Removing elements
fruits.pop(); //pop will use to remove the last element of array
console.log(fruits);

// Finding the length of an array
console.log(numbers.length);

// Iterating through arrays
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Using forEach to iterate
fruits.forEach((fruit) => {
  console.log(fruit);
}); // Using forEach to iterate through each element in the fruits array

// Using map to create a new array
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

// Using filter to create a new array with elements that meet a condition
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// Using reduce to accumulate a value from an array
const reduce = (a1, a2) => {
  return a1 + a2;
};
console.log(numbers.reduce(reduce)); // Sums all elements in the numbers array

//toString method
console.log(numbers.toString()); // Converts the array to a string

// Joining elements of an array into a string
console.log(fruits.join(" and ")); // Joins elements with a "and" and space

//shift method
fruits.shift(); // Removes the first element of the array
console.log(fruits);

//unshift method
fruits.unshift("kiwi"); // Adds an element to the beginning of the array
console.log(fruits);

// Splicing an array
fruits.splice(1, 1, "orange", "grape"); // Removes 1 element at index 1 and adds "orange" and "grape"
console.log(fruits);

// Slicing an array
const slicedFruits = fruits.slice(1, 3); // Gets elements from index 1 to 3 (not including 3)
console.log(slicedFruits);

//find method
const foundFruit = fruits.find((fruit) => fruit.startsWith("g")); // Finds the first fruit that starts with "g"
console.log(foundFruit);

//concat method
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];
let c = [11, 12, 13, 14, 15];
a.concat(b, c);
console.log(a.concat(b, c));

//includes method
console.log(a.includes(3)); // Checks if the array includes the number 3

//indexOf method
console.log(a.indexOf(4)); // Returns the index of the first occurrence of 4

//Find factorial of a number using reduce and loop
const factorial = (num) => {
  if (num < 0) return "Factorial not defined for negative numbers";
  if (num === 0 || num === 1) return 1;
  //write easy line to find factorial
  return Array.from({ length: num }, (_, i) => i + 1).reduce(
    (acc, curr) => acc * curr,
    1
  );
};
console.log(factorial(5)); // Outputs: 120
//easiest code for understanding
const factorialLoop = (num) => {
  if (num < 0) return "Factorial not defined for negative numbers";
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};
console.log(factorialLoop(5)); // Outputs: 120

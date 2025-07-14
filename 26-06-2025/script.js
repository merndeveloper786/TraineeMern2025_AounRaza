/*alert("Hello World");

console.log("Hello World");
console.log("This is a test message.");

var a = prompt("Enter a number:");
console.log("You entered: " + a);

var b = confirm("Do you want to proceed?");
if (b) {
  console.log("User chose to proceed.");
} else {
  console.log("User chose not to proceed.");
}
document.title = "My JavaScript Test Page";

document.body.style.backgroundColor = "red";*/

/*Variable*/
let ab = 10;
let bb = 20;

console.log(
  "Sum of ab and bb is: " + (ab + bb) + " and the difference is: " + (ab - bb)
);

{
  /*blocked scope concpet*/
  let ab = 30;
  let bb = 40;
  console.log(
    "Sum of ab and bb is: " + (ab + bb) + " and the difference is: " + (ab - bb)
  );
}
/*this return the value same as global scope*/
console.log(
  "Sum of ab and bb is: " + (ab + bb) + " and the difference is: " + (ab - bb)
);
/*Data Types*/
//Primitive Data types
let str = "Hello, World!"; // String
let num = 42; // Number
const bool = true; // Boolean
let blank = null; // Null
let undef = undefined; // Undefined

console.log(typeof str, typeof num, typeof bool, typeof blank, typeof undef); // tye checking

//Non-Primitive Data type --> objects
let obj = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "gaming", "coding"],
};
console.log(obj);
obj.salary = 50000; // Adding a new property
console.log(obj);

//Quick Quiz
// Create an object named 'student' with properties: name, age, phone number, and marks
// The phone number should be a string, and marks should be a number.
let student = {
  name: "Jane Doe",
  age: 22,
  "phone number": 923114841487,
  marks: 450,
};
console.log(student);

//JAvaScript Conditionals
let age = 20; // Example age variable
if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}

//operators
// Arithmetic operators
let grace = 5; // Example grace period
console.log(age + grace); // Addition operator
console.log(age - grace); // Subtraction operator
console.log(age * grace); // Multiplication operator
console.log(age / grace); // Division operator
console.log(age % grace); // Modulus operator
console.log(age ** grace); // Exponentiation operator (age raised to the power of grace)

let x = 10;
let y = 5;
console.log(x++); // Post-increment (x is incremented after this line)
console.log(++x); // Pre-increment (x is incremented before this line)
console.log(x--); // Post-decrement (x is decremented after this line)
console.log(--x); // Pre-decrement (x is decremented before this line)
// Comparison operators
console.log(x == y); // Equal to (value only)
console.log(x === y); // Strict equal to (value and type)
console.log(x != y); // Not equal to (value only)
console.log(x !== y); // Strict not equal to (value and type)
console.log(x > y); // Greater than
console.log(x < y); // Less than
console.log(x >= y); // Greater than or equal to
console.log(x <= y); // Less than or equal to
// Logical operators
console.log(x > 5 && y < 10); // Logical AND (true if both conditions are true)
console.log(x > 5 || y < 10); // Logical OR (true if at least one condition is true)
console.log(!(x > 5)); // Logical NOT (true if the condition is false)
// Assignment operators
let abc = 10;
let bcd = 5;
abc += bcd; // Equivalent to a = a + b
console.log(abc); // 15
abc -= bcd; // Equivalent to a = a - b
console.log(abc); // 10
abc *= bcd; // Equivalent to a = a * b
console.log(abc); // 50
abc /= bcd; // Equivalent to a = a / b
console.log(abc); // 10
abc %= bcd; // Equivalent to a = a % b
console.log(abc); // 0
abc **= bcd; // Equivalent to a = a ** b
console.log(abc); // 0 (since 0 raised to any power is still 0)

// Ternary operator
let isAdult = age >= 18 ? "You are an adult." : "You are not an adult.";
console.log(isAdult);

// Switch statement
let day = 4; // Example day variable (1 for Monday, 2 for Tuesday, etc.)
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
// Loops
// For loop --> loop a block of code a specific number of times
for (let i = 0; i <= 5; i++) {
  console.log("Iteration " + i);
}
//Quick Quiz
// Write a for loop that prints numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//for in loop --> loop through the properties of an object or elements of an array
let person = {
  name: "Alice",
  age: 25,
  city: "New York",
};
for (let key in person) {
  // console.log(key + ": " + person[key]);
  const element = person[key];
  console.log(key, element);
}

// Quick Quiz
// Write a for-in loop that prints the properties and values of the 'student' object created
let stud = {
  name: "Aoun",
  age: 25,
  city: "Park York",
};
for (const key in stud) {
  const element = stud[key];
  console.log(key, element);
}

// For of loop --> loop through the values of an iterable object (like arrays)
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}

// while loop --> loop as long as a specified condition is true
let count = 0;
while (count < 5) {
  console.log("Count is: " + count);
  count++;
}

//Do while loop --> similar to while loop, but it executes the block of code at least once before checking the condition
let num1 = 0;
do {
  console.log("Number is: " + num1);
  num1++;
} while (num1 < 5);

//Functions --> when our code is getting larger, we can break it down into smaller, reusable pieces called functions
//uses of functions:
// 1. Code Reusability: Functions allow you to write code once and reuse it multiple times, reducing redundancy.
// 2. Modularity: Functions help break down complex problems into smaller, manageable pieces, making your code easier to understand and maintain.
// 3. Abstraction: Functions allow you to hide the implementation details and focus on the high-level logic of your code, improving readability.
// 4. Testing: Functions can be tested independently, making it easier to identify and fix bugs.
// Function declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Aoun");

function add(a, b, c = 10) {
  return a + b + c; // Function to add three numbers and return the result
}
let sum = add(5, 10);
// we can reuse the add function to add any two numbers
let sum1 = add(15, 20);
// we can also use the add function to add variables
let xy = 25;
let yz = 30;
let sum11 = add(xy, yz);
// we can also use the add function to add numbers directly
let sum2 = add(100, 200, 500);

console.log("Sum is: " + sum);
console.log("Sum is: " + sum1);
console.log("Sum is: " + sum11);
console.log("Sum is: " + sum2);
// Function expression
const multiply = function (a, b) {
  return a * b; // Function to multiply two numbers and return the result
};
let product = multiply(5, 10);
console.log("Product is: " + product);
// Arrow function
//uses of arrow functions:
// 1. Conciseness: Arrow functions provide a shorter syntax for writing functions, making your code more concise and readable.
// 2. Lexical 'this': Arrow functions do not have their own 'this' context, which means they inherit 'this' from the surrounding scope. This is particularly useful in scenarios like event handlers or callbacks where you want to maintain the context of 'this'.
// 3. No 'arguments' object: Arrow functions do not have their own 'arguments` object, which can help avoid confusion when dealing with variable arguments.
const divide = (a, b) => {
  return a / b; // Arrow function to divide two numbers and return the result
};
let quotient = divide(10, 2);
console.log("Quotient is: " + quotient);
// Quick Quiz
// Create a function named 'calculateArea' that takes two parameters: length and width, and returns the area of a rectangle. Use this function to calculate the area of a rectangle with length 5 and width 10.
function calculateArea(length, width) {
  return length * width; // Function to calculate the area of a rectangle
}
let area = calculateArea(5, 10);
console.log("Area of rectangle is: " + area);
/* craete a faulty calculator using JavaScript
This faulty calculator should have the following features:
1. It should take two numbers as input.
2. It perform wrong operations as follows:
   - Addition should return the difference of the two numbers.
    - Subtraction should return the division of the two numbers.
    - Multiplication should return the sum of the two numbers.
    - Division should return the ** of the two numbers.
3. It perform wrong operation 10% of the time.*/
function faultyCalculator(num1, num2, operation) {
  const isFaulty = Math.random() < 0.1; // 10% chance of being faulty

  if (isFaulty) {
    switch (operation) {
      case "add":
        return num1 - num2;
      case "subtract":
        return num1 / num2;
      case "multiply":
        return num1 + num2;
      case "divide":
        return num1 ** num2;
      default:
        return "Invalid operation";
    }
  } else {
    switch (operation) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        return num1 / num2;
      default:
        return "Invalid operation";
    }
  }
}

// Example usage:
let num111 = 10;
let num22 = 2;
let operation = "divide"; // Try: "add", "subtract", "multiply", "divide"

let result = faultyCalculator(num111, num22, operation);
console.log("Result:", result);

//String Methods
// string is immutable in JavaScript, meaning once a string is created, it cannot be changed. However, you can create new strings based on existing ones using various string methods.
let str1 = "Hello, World!";
let str2 = "JavaScript is awesome!";
// String length
console.log("Length of str1:", str1.length); // Length of the string
console.log("Length of str2:", str2.length); // Length of the string
console.log(
  "The name of string 01 is ${str1} and the name of string 02 is ${str2}"
); // Template literals for string interpolation
// String toUpperCase and toLowerCase
console.log("Uppercase str1:", str1.toUpperCase()); // Converting string to uppercase
console.log("Lowercase str2:", str2.toLowerCase()); // Converting string to lowercase
// String trim
console.log("Trimmed str1:", str1.trim()); // Removing whitespace from both ends of the string
console.log("Trimmed str2:", str2.trim()); // Removing whitespace from both ends of the string
// String slice
console.log("Slice of str1 (0-5):", str1.slice(0, 5)); // Extracting a substring from index 0 to 5
console.log("Slice of str2 (0-10):", str2.slice(2)); // Extracting a substring from index 0 to the end
console.log(str2.replace("Ja", "77")); // Replacing a substring in str2
// String concatenation
let concatenatedString = str1 + " " + str2; // Concatenating two strings
console.log("Concatenated String:", concatenatedString); // Output: "Hello, World! JavaScript is awesome!"
// String char access
console.log("Character at index 0 of str1:", str1.charAt(0)); // Accessing character at index 0
console.log("Character at index 7 of str2:", str2.charAt(7)); // Accessing character at index 7
// String indexOf
console.log("Index of 'World' in str1:", str1.indexOf("World")); // Finding index of a substring
console.log("Index of 'JavaScript' in str2:", str2.indexOf("JavaScript")); // Finding index of a substring

// Escape Sequences characters
let escapedString =
  "This is a string with a newline character\nand a tab character\tand a backslash \\.";
console.log("Escaped String:", escapedString); // Output: "This is a string with a newline character and a tab character    and a backslash \."

//startof and endof string
console.log("Starts with 'Hello':", str1.startsWith("Hello")); // Checking if the string starts with a specific substring
console.log("Ends with 'awesome!':", str2.endsWith("awesome!")); // Checking if the string ends with a specific substring

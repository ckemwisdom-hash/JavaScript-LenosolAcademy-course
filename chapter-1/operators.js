// Operator

// 1. Mathematical Operators
// Additional Operator
let num1 = 20;
let num2 = 10;
let sum = num1 + num2; // Additional Operator Usage
let difference = num1 - num2; // Difference Operator usage
let product = num1 * num2; // Product Operator Usage
let quotient = num1 / num2; // Quotient Operator Usage
let reminder = num1 % num2; // Reminder Operator Usage

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(reminder);

// Comparison Operator

console.log(num1 > num2); //Greater than Operator Usage
console.log(num1 < num2); // Less than OPerator usage
console.log(num1 >= num2); //Greater than or Equal Operator Usage
console.log(num1 <= num2); //  Less than or Equal Operator Usage
console.log(num1 == num2); // Equal to Operator or Loose Equal Usage
console.log(num1 === num2); // Equal to Operator or Strict Equal Usage

console.log("----------------------------");

let number = "9"
console.log(number == 9)// True - Loose equality check
console.log(number === 9) // False - Strict equality check

// Logical Operator
let email = "amkam@lenosol.com"
let password = "123456789"

// Logical AND(&) Operator - only returns true when both condition are true true
console.log(email === "amadu@lenosol.com" && password === "123456789") // False
console.log(email === "amkam@lenosol.com" && password === 123456789) // False
console.log(email === "amkam@lenosol.com" && password === "123456789") // False

console.log("----------------------------");

// The Logical OR(||) - Only returns true when at least one condition is true
console.log(email === "amadu@lenosol.com" || password === "123456789") // True
console.log(email === "amkam@lenosol.com" || password === 123456789) // True
console.log(email === "amadu@lenosol.com" || password === "12345679") // False

console.log("----------------------------");

//The Logical Not(!)
let abuAge = 34
let mariAge = 23
let fodayAge = "34"
console.log(abuAge != mariAge) // True
console.log(abuAge != fodayAge) // False
console.log(abuAge !== fodayAge) //True





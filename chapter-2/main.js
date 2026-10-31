// nested if statement
// student grade distinction check
let grade = 92

if (grade >= 50) {
console.log("Congratulation, you passed");
  if (grade >= 90) {
    console.log("You passed with distinction");
  } else {
    console.log("You did not passed with distinction");
  }
} else {
console.log("Sorry, you failed. Please retake the exam.");
}

console.log("***************");

// Exercise
let cakes = 700;
let price = 300;
let totalPrice = cakes * price

if (cakes >= 10000) {
  console.log("You won 10% discount");
   if (totalPrice >= 20000) {
    console.log("you  are eligible to deliver");
  } else {
    console.log("your are not eligible to deliver  ");
  }
} else {
  console.log("Thank you for doing business with us");
}

console.log("*****************************");
 
let email = "admin@lenosol.com"
let password = 123456

if (email === "admin@lenosol.com" && password === 123456) {
  console.log(`Welcome User: ${email}`);
  if (email !== "admin@lenosol.com") {
    console.log(`Welcome Admin: ${email}`);  
  } else {
     console.log(`You are not Admin`);  
  }
} else {
  console.log(`Wrong Credential`);
  
}
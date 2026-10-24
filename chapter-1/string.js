let university = "Limkokwing"
console.log(university);

let fullName = "kem Wisdom Cnteh"
let gender = "Male"
let faculty = "FICT"

// 1. string concatenation
console.log("*******PERSON INFPRMATION********")
console.log("University:" + university);
console.log("Person Name:" + fullName);
console.log("gender:" + gender);
console.log("faculty:" + faculty);

let sentence = "my name is " + fullName +". I am a" + gender +" i am student at" + university +" and I am in" + faculty +"department";
console.log(sentence);

// string length 
let personName = "kem wisdom conteh";
console.log(personName.length);

// getting a character from a string by its index
console.log(personName[3]);
console.log(personName[7]);
console.log(personName[10]);
console.log(personName[11]);
console.log(personName[1]);


// exercise
let str1 = "kemoh wisdom  Conteh" 
let str2 = "Marian Kargbo" 
let str3 = "kemzie wisdom  Conteh" 
let str4 = "Mohamed Santos" 
let str5 = "Franklina Famata Nylanda" 

let abvr1 = str1[0] + str1[6] + str1[13]
let abvr2 = str2[0] + str2[7] 
let abvr3 = str3[0] + str3[7] + str3[14]
let abvr4 = str4[0] + str4[8] 
let abvr5 = str5[0] + str5[11] + str5[18]

// String Methods
let strVal = "Samuel Amkam"
console.log(strVal);


// convert to uppercase
console.log(strVal.toUpperCase);
console.log(strVal.toLowerCase);

// string formating
console.log("\t Amadu Kamara"); // \t is used to Tab
console.log("\n Akmak WebAvenger"); // \n is used to break to a new line


// Template Literal / String Literal
let num1 = 20
let num2 = 13
let num3 = 24
let average = (num1 + num2 + num3) / 3;
console.log(average);
console.log(`The average of ${num1} + ${num2} + ${num3} = ${average}`);

// checking if the value exists in a string
let email = "Amkam@lenosol.com"
console.log(email.includes("amkam")); // false
// method chaining
console.log(email.toLowerCase ().includes("amkam")); // true







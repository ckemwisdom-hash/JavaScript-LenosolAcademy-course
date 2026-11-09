// JS - OBJECTS
const student = {
  firstName: "Mohamed",
  lastName: "Kargbo",
  age: 29,
  walk: true,
  girlFriend: false,
  university: "Limkokwing",
  program: "BSEM",
  occupation: "Web Designer",
  photo: "https://www.pixabay.com/mohamed-pic-002",
  website: "http://mohamed-kargbo.netlify/mohamed-pic-002",
}

// printing the object
console.log(student);

// Accessing a property of an object
console.log(student.photo);

// uUPDATING AN ATTRIBUTE IN AN OBJECT
student.occupation = "Web Designer"
console.log(student);

// Adding a new property to the object
student.gender = "Male"
console.log(student);

console.log("*************CITIZEN DETAILS***********************");


const citizen = {
firstName: "Amadu",
lastName: "Kamara",
ninNumber: "FR678E8",
country: "Sierra Leone",
job: "Computer Scientist",
}

console.log(`First Name: ${citizen.firstName}\n Last Name: ${citizen.lastName}\n Nin Number: ${citizen.ninNumber}\n Country: ${citizen.country}\n Job: ${citizen.job} `);


console.log("*****************HOUSE***********************");

const house = {
  location: "Lumley",
  numberOfRooms: 4,
  parlour: 2,
  bathRoom: 5,
  owner: "Mohamed",
  pricePerNight: 100,
  facilities: ["Internet", "One Mobile - Wifi","Kitchen", "TV", "Car Park", "Dryer", "Pool", "Beach Acess", "No Smoking", "No Pet" ],
  appartment: {
    name: "Block D appartment",
    numberOfRooms: 2,
    gamingTV: 1
  }
}
console.log(house);
console.log(house.appartment);
console.log(house.facilities);





// singleton
// Object.create

//object literals
const mySym = Symbol("key1");

const jsUser = {
  name: "Pappu",
  "full name": "Pappu Naskar",
  [mySym]: "myKey1",
  age: 18,
  location: "West Bengal",
  email: "Pappunaskar35@gmail.com",
  isLoggedIn: false,
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof [mySym]);

jsUser.email = "xyz@gmail.com";

// console.log(jsUser["email"]);
// Object.freeze(jsUser);

jsUser.email = "abcdz@gmail.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("hello js user");
};

jsUser.greetingTwo = function () {
  console.log(`hello js user ${this["full name"]}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

//? read mnd

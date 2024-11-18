// singleton

//const tinderUser = new Object(); // this declare is the singleton object

const tinderUser = {};

tinderUser.id = "123abc ";
tinderUser.name = " sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "xyz@.com",
  fullname: {
    userfullname: {
      firstname: "Pappu",
      lastname: "Naskar",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 2: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

const { courseInstructor } = course;
console.log(courseInstructor);

// JSON

// {
//   name : "pappu",
//   coursename : "js in hindi",
//   price : "free"
// }

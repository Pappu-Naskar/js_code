// const userEmail = "Pappu03@gmail.com";
// const userEmail = "";
// const userEmail = [];

// if (userEmail) {
//   console.log("Got user email ");
// } else {
//   console.log("Don't have user email");
// }

// falsy value

//* false , 0 , -0 , BigInt 0n, " ", null , NaN , undefined

// truthy value
//* "0",'false' ," ",[] , {} , function (){}

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  //? convert object  to Array
  console.log("Object is empty");
}

// nullish coalescing operator (??): null undefined

// let val1;
// // val1 = 5 ? ? 10
// val1 = null ? ? 10
// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
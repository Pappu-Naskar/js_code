const user = {
  username: "Pappu",
  price: 999,

  welcameMassage: function () {
    console.log(`${this.username},welcame to website`);
    // console.log(this);
  },
};

// user.welcameMassage();
// user.username = "sam";
// user.welcameMassage();

// console.log(this);

// function chai() {
//     let username ="pappu"
//   console.log(this.username);
// }
// chai();

// const chai = function chai() {
//   let username = "pappu";
//   console.log(this.username);
// };
// chai();

const chai = () => {
  let username = "pappu";
  console.log(this);
};

// chai();

//? Arrow function

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(7, 3));

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => ({ username: "Pappu" });

console.log(addTwo(7, 3));

let a = 100; //the global scope

if (true) {
  // block scope
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

// nested scope

function one() {
  const username = "pappu";

  function two() {
    const website = "youtube";
    // console.log(username);
  }
  // console.log(website);
  two();
}
// one();

if (true) {
  const username = "Pappu";
  if (username === "Pappu") {
    const website = "  youtube";
    // console.log(username + website);
  }
  // console.log(website); // this console give a error because this code run out of scope
}
// console.log(username); // same

//----------------------------------interesting Question--------------------------------------------->

function addone(value) {
  return num + 1;
}

addone(5);

const addTwo = function (num) {
  return num + 2;
};

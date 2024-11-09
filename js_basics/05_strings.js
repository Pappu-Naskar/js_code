const name = "pappu";
const repoCount = 2;

// console.log(name + repoCount + "Value"); //!not use this 💀

// console.log(`hello my name is${name} and my repo count is ${repoCount}`); //use this😊

const gameName = new String("Papppu");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 4); //! not use negative value 💀
// console.log(newString);

const anotherString = gameName.slice(0, 4);
// console.log(anotherString);

const newStringOne = "    pappu.   ";
// console.log(newStringOne.trim()); // trim() : use for whitespaces
// read document for trim() so follow link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const newStringTwo = " abcd";
// console.log(newStringTwo.replace("abcd", "pappu")); //  replace() : use to replace oldValue To NewValue

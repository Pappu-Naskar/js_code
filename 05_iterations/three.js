// for of

// const arr = [1, 2, 3, 4, 5, 6];

// for (const num of arr) {
//   console.log(num);
// }

// const arr = ["flash", "superman", "ironman", "batman"];
// for (const supMan of arr) {
//   console.log(supMan);
// }

const greetings = "hello world";
for (const gret of greetings) {
  //   console.log(`each char is ${gret}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

const myObject = {
  game: "NFS",
  game2: "Spiderman",
};

// for (const [key,value] of myObject) {
//     console.log(key, ':-',value)
// }

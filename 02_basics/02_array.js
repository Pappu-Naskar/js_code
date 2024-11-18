const marvel_heros = ["thor", "Ironman", "spiderman"];

const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// const newHeros = marvel_heros.concat(dc_heros);
// console.log(newHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_arr = another_array.flat(Infinity);
console.log(real_another_arr);

console.log(Array.isArray("Pappu"));
console.log(Array.from("Pappu"));
console.log(Array.from({ name: "Pappu" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

//! read mdn for more information😁

// for loop

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the best number");
  }
  // console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`outer loop value : ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value ${j} and outer loop : ${i}`);
    // console.log(i + "*" + j + " = " + i * j);
  }
}

//  break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Deteected 5`);
//     break;
//   }
//   console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Deteected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}

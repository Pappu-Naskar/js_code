const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc : ${acc} and currval : ${currval}`);

//   return acc + currval;
// }, 0);

// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);

// console.log(myTotal);

const shopingCarts = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "css course",
    price: 99,
  },
  {
    itemName: "c course",
    price: 5999,
  },
];

// const pay = shopingCarts.reduce((acc, item) => acc + item.price, 0);

const pay = shopingCarts.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(pay);

function myName() {
    console.log("Pappu Naskar");
  }
  
  // myName();
  
  // function addTwoNumbers(number1, number2) {
  //   console.log(number1 + number2);
  // }
  
  function addTwoNumbers(number1, number2) {
    //   let result = number1+number2
    //   return result
    return number1 + number2;
  }
  
  // addTwoNumbers(3, "4");
  
  const result = addTwoNumbers(3, 4);
  // console.log("Result : ", result);
  
  function loginUserMessage(username) {
    return `${username} just logged in`;
  }
  
  // console.log(loginUserMessage());
  
  function addToCart(...num1) {
    return num1;
  }
  
  // console.log(addToCart(200, 400, 300, 800, 700));
  
  const user = {
    username: "pappu",
    price: 999,
  };
  
  function handleObject(anyobject) {
    console.log(
      `user name is ${anyobject.username} and price is ${anyobject.price}`
    );
  }
  
  // handleObject(user);
  
  handleObject({
    username: "pappu",
    price: 344,
  });
  
  const myNewArray = [200, 300, 400, 500, 700];
  
  function returnSecondValue(getArray) {
    return getArray[1];
  }
  
  console.log(returnSecondValue([200, 300, 400, 500, 700]));
  
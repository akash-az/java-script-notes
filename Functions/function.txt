// function sayMyname() // function is a keyword.
//   {     // curly braces represents function definition or function scope

//     console.log("hello");
// }

// sayMyname() // reference of function is : name > when we put "()" , it means execution.

// function logInMessage(name = akash){  // if we give in parametre (name = sam) // value will never be undefined and we wont go in if block.
//                                 // and if a name in argument is passed it will overwrite sam.

//     if(name === undefined){   // or can be written as if(!name){} > (!name) -> represents undefined and if undefined is true enter the block
//     //          console.log("please enter a name");
//         return  // this return is what prints undefined in the browser after each result.
//     }

//     return `${name} just logged in`;

// }

//  console.log(logInMessage("ravi")); // output : ravi just logged in
// console.log(logInMessage(undefined)); // ReferenceError: akash is not defined

// if no value is passed :  console.log(logInMessage("akash")); // output : undefined just logged in.


// function calculateCartPrice(num1){
//     return num1;
// }

// console.log(calculateCartPrice(5,6,7)); // output : 5 . only first element
    
     // to resoleve this spread operator is used

 // Example 1:    
// function calculateCartPrice(...num1){ // "..." operator is called spread operator and this same operator is called rest operator
//     return num1;                         // depending on where and how it is used.
// }

// console.log(calculateCartPrice(5,6,7)); // returns array :[ 5, 6, 7 ] > for passing multivle values in function

// //Example: 2 
//  function calculateCartPrice1(val1,val2, ...num1){
//     return num1;
//  }

//  console.log(calculateCartPrice1(5,6,7,8,9,10)); // output : [ 7, 8, 9, 10 ] > as we only returned num1, and 5,6 goes to val1,val2 respectively

//  const user = {
//     name : "ankit",
//     prices : 199 // if later we cange price to prices and in function its still prices // output Username is ankit and price is undefined.
//  }

//  function handleObject(anyObject){
//     console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
//  }

//  handleObject(user);
  
    // Also we can pass objects directly 
    // handleObject(
    //     {
    //     name : "rahul",
    //     price:200
    //     }
    //             );  // output : Username is rahul and price is 200

    // we can pass an array as an argument too.

// const myArray = [1,2,4,5,6];

// function handleArray(getArray){
//     return getArray[1];
// }

// console.log(handleArray(myArray)); // output : 2
   // similarly we can directly pass array : console.log(handleArray([200,300,400,500])) // output : 400





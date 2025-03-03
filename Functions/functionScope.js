// let a = 40
// const b  = 30
// var c = 20

// console.log(a);
// console.log(b);
// console.log(c);
// // this is global scope.
// // {} represents scope.  //defines an independent scope for particular task

// function ab(){ // this is block scope
// let a = 5
// const b  = 6
// var c = 10 // or just c = 10
// }

// console.log(a);  // error : bcus let is block scope, b is not declared outside
// console.log(b); // error : bcus const is block scope, b is not declared outside 
// console.log(c); // no error : bcus var has global scope // output 10 .

// problem : if a programmer uses var and multiple individuals are programming ,and one file with same variable name in a function is imported in 
//   the current file ,but current user is not aware.now current user will get output of variable from unknown file.


// Example 2 : 

// let d = 10;

// function printNum(){
//     let d = 20;
//     console.log("block scope :" + d);  
// }

// printNum(); //output 20
// console.log("global scope :" + d); // output 10

 // ** Global scope is different in browser console and different in code environment in node application.


           // Nested Scope

  function one(){

    const username = "akash"

    function two(){
        const website = "youtube";
        console.log(username);
    }

    //console.log(website); // output > ReferenceError: website is not defined and thats why two is never executed,
                              //proving line by line execution
    two();
  }         

  one();

  //* For each function a specific call stack is generated.
  // * In nested function : child function can access parent resources.


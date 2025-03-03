// const user = {
//     name : "akash",
//     age:24,

//     helloMessage: function (){
//         console.log(`Hello ${this.name}`); // output : 
//         console.log(this); // output : { name: 'akash', age: 24, helloMessage: [Function: helloMessage] } 
//     }


    
// }

// user.helloMessage(); // output : Hello akash
//                      //  { name: 'akash', age: 24, helloMessage: [Function: helloMessage] } 

// console.log(this); // output : {} // i.e is outside object in node environment this references globa; object {},
// //                                 but in browser this references window object.
 // ** window is the global object  in the browser.

// function print(){
//     let user = "rahul";
//     console.log(this);      // output : global object,queueMIcrotask .. etc
//     console.log(this.user); // output :  undefined // inside function , references current context only in object.
// }

// print();

                                          //**** Arrow functions
                                     
// const a = () => {
//     let user = "rahul";         
//     console.log(this.user);   // output : undefined
//     console.log(this); // output : {} // where as in normal function this represents global object : global object,queueMIcrotask .. etc
// }

// a();

                 //Basic Arrow function 
const two = (num1,num2) => {
    return num1*num2;             // curly brces me likha to return keyword likna padega.
}

console.log(two(5,6)); // output : 30


                // Implicit return : another wayto write arrow function
                
 
const three = (num1,num2) => num1*num2  // no curly braces , no return keyword
const four = (num1,num2) => (num1*num2) // no return keyword
console.log(three(4,7))
console.log(four(3,2))

const five = () => ({name : rahul})   // for object curly braces are used. // for objects wrap in paranthesis. 







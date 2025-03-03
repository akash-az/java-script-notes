const accountId = 14;
let accountEmail = "akash@google.com"  // scope  -> {  } this is scope.
var accountPassword = "1245"; // global scope.
accountCity = "Jaipur"; // can be declared without data type

let account; // console.log(account) -> output undefined.

//   accountId = 5 -> ;             TypeError: Assignment to constant variable.
// console.log(accountId);

accountEmail = "rahul@gmail.com";
accountPassword = "5678";

console.table([accountEmail,accountPassword]); // shows output in a table with index 0 and 1.

// alert cannot be used in notes.

//console.log("1244")
// console.log(1234) -> both lines will execute without semicolon but wont run in same line

//                                        *************DATA TYPES*******************

// number -> number -> ranges : 2^53  
// BigInt -> even bigger numbers
// String -> Strings
// Boolean -> true/false values
// null    -> stand Alone values
// undefined  -> not assigned any value
// symbol -> for finding individual/unique component.
//object

// console.log(typeof null) -> object
// console.log(typeof undefined) -> undefined
// console.log(typeof "rahul") -> String




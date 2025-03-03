// let score = 3;

// but sometimes we dont know the data coming is in string or number or object.

// example => const {score} = req.body;

// let numScore = Number(score) -> guarantees any input coming will become a  number.
// but if input was "3ab" -> then it will convert it into NAN(not a number)

// typeof will show number but console.log(numscore) -> will give NAN.

// Similarly 
//  let score = null;
// let numScore = Number(score);
// console.log(typeof(numScore)); number
//  console.log(numScore); output 0 , Number converts it to 0 


// Similary 
//  let score = "rahul";
// let numScore = Number(score);
// console.log(typeof(numScore));  number 
//  console.log(numScore); NaN
 


//  let score = undefined;
// let numScore = Number(score);
// console.log(typeof(numScore)); NaN
//  console.log(numScore); output undefined , Number converts it to undefined

//  let score = true/false;
// let numScore = Number(score);
// console.log(typeof(numScore)); boolean
//  console.log(numScore); output 1/0 , Number converts it to 1/0


// "33" => 33
//"33abc" => NaN
// true => 1;false=> 0

//                         boolean conversion

// let value = 1;
// let booleanValue = Boolean(value); 
// console.log(typeof(booleanValue)); boolean
// console.log(booleanValue); true

// let value = 0;
// let booleanValue = Boolean(value); 
// console.log(typeof(booleanValue)); boolean
// console.log(booleanValue); false


// let value = 100/ -100 / 3 ..;
// let booleanValue = Boolean(value); 
// console.log(typeof(booleanValue)); boolean 
// console.log(booleanValue); true

// let value = "";
// let booleanValue = Boolean(value); 
// console.log(typeof(booleanValue)); boolean
// console.log(booleanValue); flase

// let value = "hello";
// let booleanValue = Boolean(value); 
// console.log(typeof(booleanValue)); boolean
// console.log(booleanValue); true


//                                String conversion

// let value = 5;
// let booleanValue = String(value); 
// console.log(typeof(booleanValue)); String 
// console.log(booleanValue); 5










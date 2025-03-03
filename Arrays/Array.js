// const myArray = [0,1,2,3,"hello",1.5,true]; // different elements can be present in js array.

// const newArray = new Array(1,5,3,6);

// //Array is an Object.

// // shallow copy - objects share the same reference.
// // deep copy - objects share different reference.

// // * if we make array in console and write array -> there we have elements,length,prototype, prototype has sub elements which also has a prototype.

// //                                      Methods

// myArray.push(7); // adds elements at last 
// myArray.push(8);
// console.log(myArray); 
// myArray.pop(); // removes array element from last
// console.log(myArray);
// myArray.unshift(8); //adds array to the beginning
// console.log(myArray);
// myArray.shift(); // removes from first , dosen't require arguments.

// // questionaires methods(checks if a value is present) -> return boolean value.  

// console.log(myArray.includes(7)); // returns boolean value if argument present

// console.log(myArray.indexOf(9)); // returns index or -1 if  value  present/absent

// console.log(myArray.indexOf(3));

// const names  = ["shibu,chotu,neha,rahul"];
// console.log(typeof names); // output: object

// const joinExample = names.join(); // returns elements of array as string. : '1,2,3,4'

// console.log(typeof joinExample);  // returns string

//                                        slice and splice

//     // slice  -> myArray.slice(1,3) -> manipulates copy of the array and returns elements from 1 to 2 excluding 3.
// const myArray = [1,2,3,4,5];
// console.log(myArray.slice(1,3)); returns [2,3]
// console.log("slice Array : " , myArray); [1,2,3,4,5]

//    //splice 

// // splice  -> myArray.splice(1,3) -> manipulates original array and returns elements from 1 to 3 including 3.
// const myNewArray = [1,2,3,4,5]; 
// console.log(myNewArray.splice(1,3)); //returns [2,3,4]
// console.log("splice Array : " , myNewArray); // returns array after removing splices elements. : [1.5]


//                                                 Arrays Insertion


// const marvel = ["iron man","spiderman","thor"];
// const dc = ["batman","superman","flash"];

// marvel.push(dc); // entire array will be pushed in marvel array as single element.
// console.log(marvel.push(dc)); // prints number of elements in marvel Array. i.e : returns 4.

// console.log(marvel[3][2]); // accessing array elements of dc inner array. :  returns flash

                  // concat -> combines 2 arrays returns new array, limitation : only adds 2.

// const allHeroes =  marvel.concat(dc);
//  console.log(allHeroes); ["iron man","spiderman","thor","batman","superman","flash"]

                 // spread operator -> combines arrays given as arguments. 
//  const allNewHeroes = [...marvel,...dc]; // can also take more than 2 arguments
// console.log(allNewHeroes);
  
                 // flat method -> returns new array with all elements 

// const conjustedArray = [1,2,3,[4,5,6],7,[8,9,[10,12]]];

  // takes depth as argument , 1 means first depth, Infinity means all subarray or elements

//const flatArray1 = conjustedArray.flat(0)
//console.log(flatArray1); // returns : (6) [1, 2, 3, Array(3), 7, Array(3)]

//const flatArray2 = conjustedArray.flat(1); 
// console.log(flatArray2);// returns : [1, 2, 3, 4, 5, 6, 7, 8, 9, Array(2)]


// const flatArray3 = conjustedArray.flat(Infinity); 
// console.log(flatArray3);// returns : (11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]

// console.log(Array.isArray("rahul"));// returns boolean value : false  , // if no array created before . 
// const fromArray = Array.from("Akash"); // returns new array with each element
// console.log(fromArray); // returns : (5) ['A', 'k', 'a', 's', 'h']

// console.log(Array.from({name : "mota"})); // returns empty array if key or value not specified for making array i.e []

// let value1 = 2;
// let value2 = 1;
// let value3 = 3;

// console.log(Array.of(value1,value2,value3)); // combines  given elemets as elements of array and returns new array // (3) [1, 2, 3]

 

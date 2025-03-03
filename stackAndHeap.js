// Primitive data type is stored in stack memory > whatever variable we make , we get a copy of it.
// Nonprimitive data type is stored in heap. when we copy variable value to another variable we get actual value.



//  example 
// let variable = "you tube"; -> stack
// let another = variable;
// another = " hello ";
// console.log(variable); value remains same
// console.log(another); only copy of variable is stored in another so only another value will change

let user1 = {

    name : "hello",
    email: "s@gmail.com"
}

let user2 = user1; // user2 references the same value of user1 in heap. reference stored in stack.

user2.name = "rahul";

console.log(user1); // value changes bcus object stored in heap changes the actual value// {name:"rahul",emial:"s@gmail.com"}
console.log(user2); // va;ue changes // {name:"rahul",emial:"s@gmail.com"}








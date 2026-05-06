
// Types of Datatype in JavaScript 
// 1. Primitive (immutable means size fixed) Datatypes: string, number, boolean, null, undefined, symbol
// 2. Non-Primitive Datatypes: object, array, function

let name = "shashank"; // string
let name1 = 'jain' // string
let age = 22; // number
let isStudent = true; // boolean
let address = null; // null means no value
let phoneNumber; // undefined
let id = Symbol("name"); // symbol is a unique identifier

console.log ("Find the type of the variables");

console.log(typeof name); // string
console.log(typeof name1); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean       
console.log(typeof address); // object (this is a quirk in JavaScript, null is considered an object)
console.log(typeof phoneNumber); // undefined   
console.log(typeof id); // symbol

console.log ("Print the values of the variables");

console.log(name); // shashank
console.log(name1); // jain
console.log(age); // 22
console.log(isStudent); // true
console.log(address); // null
console.log(phoneNumber); // undefined  
console.log(id); // Symbol(id)


// Non-Primitive Datatypes (mutable means size can change


//An array is a collection of elements that can hold multiple values of different data types. It is an ordered list of items, and each item can be accessed using its index.
let arr = [1, 2, 3, 4, "Jain"];
console.log(arr.length); // 5 size of the array

console.log(arr.at(3)); // 4 element at index 3


//An object is a collection of key-value pairs, where each key is a string (or symbol) and the value can be of any data type. Objects are used to represent real-world entities and their properties.
let person = {
    name: "shashank",
    name :  "jain", // let re-assign is allowed, if we have duplicate keys in an object, the last key will overwrite the previous key
    age: 22,
    isStudent: true
}

console.log(person); // { name: "jain", age: 22, isStudent: true }
console.log(person.age);
console.log(person.name); // jain
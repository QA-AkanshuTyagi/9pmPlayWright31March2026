
// Two Types of DataTypes in Javascript: primitive and non-primitive data types.
// Non-Primitives:  object, array, function

// Array: An array is a collection of elements that can hold multiple values of different data types. It is an ordered list of items, and each item can be accessed using its index.
let name_arr = ["Aishwarya",30,"Automation","QA",true];
console.log(name_arr);     // Output: ["Aishwarya", 30, "Automation", "QA", true]
console.log(name_arr[2]);  // Accessing the 3rd element of the array
console.log("length of Array is : ",name_arr.length); // Output: 5

// Object: An object is a collection of key-value pairs, where each key is a string (or symbol) and the value can be of any data type. Objects are used to represent real-world entities and their properties.  
let person =
{
    name: "Aishwarya",
    age: 30,
    profession: "Automation Engineer",
    isMarried: true 
}
console.log(person);         // Output: { name: "Aishwarya", age: 30, profession: "Automation Engineer", isMarried: true }
console.log(person.name);    // Accessing the 'name' property of the object
console.log(person.age);     // Accessing the 'age' property of the object
console.log(person.profession); // Accessing the 'profession' property of the object
console.log(person.isMarried);  // Accessing the 'isMarried' property of the object


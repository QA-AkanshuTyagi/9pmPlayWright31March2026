// Variables in JavaScript can be declared using var, let, or const. Each has its own scope and behavior.
// 1. var: Variables declared with var are function-scoped and can be re-declared and updated. They are hoisted to the top of their scope, which means they can be used before they are declared (though this can lead to undefined behavior).
// 2. let: Variables declared with let are block-scoped and can be updated but not re-declared within the same scope. They are also hoisted, but not initialized, which means they cannot be used before they are declared.
// 3. const: Variables declared with const are block-scoped and cannot be updated or re-declared. They must be initialized at the time of declaration. Like let, they are hoisted but not initialized.
// Example of var
/*
var name1 = 'PriyankS';
var name1 = 'PriyankNew';   
Example of let
let name = 'PriyankSrivastava';
name = 'PriyankN';  
Example of const
const name2 = 'Priyank';
name2 = 'PriyankNew'; // This will throw an error because name2 is a constant 
*/


let name = 'PriyankSrivastava';
name = 'PriyankN';
name = 'PriyankNew';
name = 'PriyankNew2';
console.log('First Let - ',name);

var name1 = 'PriyankS';
var name1 = 'PriyankNew';
console.log('Second Var - ',name1);

const name2 = 'Priyank';
//name2 = 'PriyankNew'; // This will throw an error because name2 is a constant
console.log('Third Const - ',name2); 


let first = "Priyank"
let lastname = "Srivastava"

//console.log(first + lastname) // with space
//console.log(first +" "+ lastname) // with space

//string concatenation
//console.log(first.concat(" ",lastname))


console.log(`${first} ${lastname}`) // template literals
console.log(`${first} ${lastname} is a good boy`) // template literals with additional text
console.log("${first} ${lastname} is a good boy") //" not working with template literals 

//string interpolation
let age = 100;
console.log(`${first} ${lastname} is ${age} years old`) // string interpolation with template literals      

//String methods:
//indexing  01234567891011121314151617
let str=   "Priyank Srivastava";
console.log(str.length);//length of the string
console.log(str.charAt(8))//to find the character at a specific index
//same tareeka to find char - 
console.log(str.charAt(str.length-10));//to find the character at a specific index

console.log(str.toUpperCase());//to convert the string to uppercase
console.log(str.toLowerCase());//to convert the string to lowercase
console.log(str.ignoreCase);//to ignore the case of the string

console.log("####################################################")

let newname="   My Name is Priyank Srivastava       "
console.log(newname);

console.log(newname.trim()); // remove all the space from the start and end of the string

//includes method is used to check if a string contains a specific substring. It returns true if the substring is found, and false otherwise.
console.log(newname.includes("Priyank"));

//Indexing --
//       01234567891011-----
newname="My Name is Priyank Srivastava and I am learnig JavaScript"
console.log(newname)

console.log(newname.length) // to find the length of the string

//startsWith method is used to check if a string starts with a specific substring. It returns true if the string starts with the specified substring, and false otherwise.

console.log(newname.startsWith("My"));

//endsWith method is used to check if a string ends with a specific substring. It returns true if the string ends with the specified substring, and false otherwise.

console.log(newname.endsWith("Script"));


//slice method is used to extract a portion of a string and return it as a new string. -- like as substring function  

console.log(newname.slice(0,11)); // to extract the first 11 characters of the string (11 wala include nahi hoga)
console.log(newname.substring(0,11)); //same slice wala

//replace method is used to replace a specified value with another value in a string. 
 
console.log(newname.replace("My","New")) // concern -- My replace nahi ho raha.. 

//replaceAll method is used to replace all occurrences of a specified value with another value

console.log(newname.replaceAll(" ","*"))// it will change all space to *

//split method is used to split a string into an array of substrings

console.log(newname.split(" ")) // it will change all string into array  -- concern kitte space dene hai??



/*

console.log(name1.charAt(20));

console.log(`hello guys, ${name1}`)

*/

/////////////////////////////////////////////////////////////////////////////////////



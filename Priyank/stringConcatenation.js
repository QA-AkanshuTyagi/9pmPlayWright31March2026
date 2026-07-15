let firstname = "Priyank";
let lastname = "S";

//String Concatenation
console.log("====1st method of String Concatenation====")
console.log(firstname + lastname) //without space
console.log(firstname+" "+lastname) // with space

// 2nd method of Concatenation
console.log("====2nd method of Concatenation====")
console.log(firstname.concat(lastname)); //without space
console.log(firstname.concat(" ",lastname)); // with space
console.log(firstname.concat(" ").concat(lastname)); // with space
console.log(firstname,lastname); // with space

//template litteral
console.log("====template litteral====")
let carModel = "Sierra";
console.log(`My Car model is ${carModel}`); // My Car model is Sierra
//In template litteral we can use backticks `` and ${} to insert variables or expressions inside the string. It allows us to create dynamic strings easily without the need for concatenation.
let carBrand = "Tata";
console.log(`My Car brand is ${carBrand}`); // My Car brand is Tata

let myCar = `${carModel} ${carBrand}`;
console.log(myCar); 

let name = "John";
let age = 30;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // "Hello, my name is John and I am 30 years old."
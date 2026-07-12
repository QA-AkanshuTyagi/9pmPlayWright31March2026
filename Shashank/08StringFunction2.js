//trim function
console.log("===== trim() =====")
let firstname = "   Shashank   ";
console.log(firstname) //without trim
console.log(firstname.trim())

// includes() method -- its return the output in bollean value (true or false) and it is case sensitive
console.log("===== include() =====")
let str = "Hello I am Shashank Jain";
console.log(str.includes("Am")) // false (case sensitive)
console.log(str.includes("am")) // true

//startsWith() & endsWith() method -- its return the output in bollean value (true or false) and it is case sensitive
console.log("===== startsWith =====")
console.log(str.startsWith("Hello")) // true
console.log(str.startsWith("hello")) // false - case sensitive
console.log(str.startsWith("H")) // true
console.log(str.startsWith("Hello I")) // true - case sensitive

console.log("===== endsWith =====")
console.log(str.endsWith("Jain")) // true
console.log(str.endsWith(" Jain")) //true
console.log(str.endsWith("shank Jain")) // true

console.log("===== slice() =====")
           //01234 jha se lena hai uska index number +1 krdo
let str1 = "Hello I am Shashank Jain";
// slice(start, end) - start is included, end is excluded
console.log(str1.slice(0,5)) // Hello
console.log(str1.slice(0,6)) // Hello I
console.log(str1.slice(11,19)) // Shashank
console.log(str1.slice(11)) // Shashank Jain (from index 11 to end)
console.log(str1.slice(8,str.length))

console.log("===== replace() =====")
console.log(str1.replace("Shashank","Lakshita"))
console.log(str1.replace(" ","_")) // it will replace only the first space with _

console.log("===== replaceAll() =====") // if i want to replace all the occurences of a word or space in a string then we can use replaceAll() method        
console.log(str1.replaceAll(" ","_")) // it will replace all the spaces with _
console.log(str1.replaceAll("Shashank","Lakshita")) // it will replace Shashank to Lakshita

console.log("===== split() ======");
//wants to convert string into array then we can use split() method
let str2 = "Hello, I am Learning Automation using Playwright";
console.log(str2.split(" ")) // it will split the string into array of words based on space
console.log(str2.split(",")) // it will split the string into array of words based on comma

console.log("===== charAt() =====") 
// charAt() method is used to get the character at a specific index in a string. It takes an index as an argument and returns the character at that index. The index starts from 0. If the index is out of range, it returns an empty string.
console.log(str2.charAt(15));

console.log("===== templateLiteral() =====")
let babyName = "Lakshita Jain";
console.log(`My Daughter name is ${babyName}`)
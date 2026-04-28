/*let name= "rahul"
let name1= 'kaashvi';  //In Java script we can user both single or double quotes it doesnt matter
console.log(name)

//string concatenation
let firstName="Rahul"
let lastName="Tandon"

let fullName= firstName+" "+lastName

//using concat method
let fullName2= firstName.concat(" ", lastName)

//Using concate method with comma
let fullName3= firstName.concat(", ", lastName)


//Literal template.A way to have embedded expression in string.
//String interpolation: embedding expression in string using backticks and ${}.
let fullName4= `${firstName} ${lastName}`

console.log('my first name is '+ firstName + ' and my last name is '+ lastName)
console.log(`my first name is ${firstName} and my last name is ${lastName}`) // this will work
console.log("hello guys my is",firstName+" and my last name is",lastName) // this will work

//escape characters in string
console.log("firstName\nlastName") // this will not work because \n is not a valid escape sequence in JavaScript. It will be treated as a normal string.
*/
//String methods
let text= "   Hello, my dog is cute    "
//console.log(text.length) // this will print the length of the string
//console.log(text.indexOf("dog")) // this will print the index of the first occurrence of "dog"
//console.log(text.lastIndexOf("dog")) // this will print the index of the last occurrence of "dog"
//console.log(text.slice(7, 10)) // this will print the substring from index 7 to 10
//console.log(text.substring(7, 10)) // this will print the substring from index 7 to 10
//console.log(text.replace("dog", "cat")) // this will replace "dog" with "cat"
console.log(text.toUpperCase()) // this will print the string in uppercase
console.log(text.toLowerCase()) // this will print the string in lowercase
console.log(text.trim()) // this will remove the whitespace from both ends of the string
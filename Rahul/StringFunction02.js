let name= "My name is rahul "
console.log(name);
console.log(name.trim());// will remove the extra space from both end

//#####################################
console.log(name.includes("ra"));// true
console.log(name.includes("is r"));// false

let name1="playwright automation tool is trending in the market"
console.log(name1.length) // this will print the length of the string
console.log(name1.startsWith("playwright automation tool")) // this will return true if the string starts with "playwright automation tool"
console.log(name1.endsWith("trending")) // this will return true if the string ends with "market"

console.log(name1.slice(15, 22)) // this will print the substring from index 0 to 10
console.log(name1.slice(15,name1.length)); // this will print the substring from index 15 to the end of the string

console.log(name1.replace("playwright","selenium")) // this will replace "playwright" with "selenium"
console.log(name1.replaceAll(" ","$")) // this will replace all the spaces with "$"

console.log(name1.split(" ")) // this will split the string into an array of substrings based on the space character
console.log(name1.charAt(23)) // this will print the character at index 20

let firstName="astha";
let lastName="tyagi";





//string concatenation
//let fullName=firstName+" "+lastName;
 
//let fullName1=firstName.concat(" ").concat(lastName);

//let fullName1=firstName.concat(" ",lastName);
// 

console.log(firstName,lastName,"checking");

let fullName=`${firstName} ${lastName}`;//template literal
console.log(`hello guys my firstname is ${firstName} and my lastname is ${lastName}`);


console.log("hello guys myFirstname is",firstName,"and my lastname is",lastName);
console.log("hello guys myFirstname is"+firstName+"and my lastname is"+lastName);


//String methods:
//indexing  012345678910
let str=   "hello world how are you";
console.log(str.charAt(str.length-1));//to find the character at a specific index
console.log(str.length);//length of the string

console.log(str.toUpperCase());//to convert the string to uppercase
console.log(str.toLowerCase());//to convert the string to lowercase
console.log(str.ignoreCase);//to ignore the case of the string
let expectedText="Apply Now"//APPLY NOW ///apply now
let actualText="apply now"; //APPLY NOW //apply now
if(expectedText.equalsignoreCase(actualText)){


}
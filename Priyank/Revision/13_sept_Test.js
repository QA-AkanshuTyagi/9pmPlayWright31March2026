
// 1. What is JavaScript?
// --JS is a programming language 

// 2. What are the different data types in JavaScript?
// -- Primitives and Non Primitives
// -Primitives 
// --- string, number, boolean, null, undefined, bigint, symbol
// -Non-Primitives
// --- object, array, function

// 3. What is the difference between primitive and non-primitive data types?
// - Primitive - for a single data value 
// - Non Primitive - for a collection of values

// 4. What is the difference between undefined and null?
// - undefined - when you not pass any data type to any varaiable.
// eg. -- let address

// - Null - when you pass null data type to any varaiable. this is intentionally 
// eg. -- let address = null

// 5. What is the difference between == and ===?
// - '==' Loose equality
// eg. -- (5 == '5')
// it will change string to number and then show output true

// - '===' Strict equality
// eg. -- (5 == '5')
// it will strictly compare string and number and then show output as false

// 6. What is NaN?
// - Not a number --  result of the operation is not a valid number
let name = 'Priyank'
console.log(name - 10)

// 7. What is the output of typeof null?
// object 
console.log(typeof null)

// 8. What is the output of typeof undefined?
// undefined only
console.log(typeof undefined)

// 9. What is the output of typeof []?
// object
console.log(typeof [])

/*
typeof undefined  // "undefined"
typeof null       // "object"  
typeof []         // "object"
typeof {}         // "object"
typeof "Priyank"  // "string"
typeof 10         // "number"
typeof true       // "boolean"
*/

// 10. What are var, let, and const?
// these all are the variables of js that can be declare

// 11. What is the scope of var, let, and const?
// var - it can be re reassign and redeclare
// let - it can be re reassign but not redeclare
// const - it can not be reassigned and redeclare


// 12. Can we redeclare and reassign let and const variables?
// we can not redeclare and reassign const variable but we can re assign let variable


// 13. What is hoisting?
/*
Hoisting is JavaScript's behavior where declarations are processed before the code is executed. 
var declarations are hoisted and initialized with undefined, while let and const are hoisted but 
remain in the Temporal Dead Zone until their declaration is reached. Function declarations are 
also hoisted, which allows them to be called before their declaration in the code.
*/

// console.log(a)
// var a = 10

// console.log(b)
// let b = 10

// console.log(c)
// const c = 10


// 14. What is the Temporal Dead Zone?
// Temporal Dead Zone = a period of time when a declared let or const variable cannot be accessed

// Operators
// 15. What are operators in JavaScript?
// 3 types of operators 
// 1. arithmetic -- +, -, *, /, **, %
// 2. comparison -- >, <, >=, <=, ==, ===, !=, !==
// 3. logical -- &&, ||, !


// 16. What are arithmetic operators?
// arithmetic -- +, -, *, /, **, % (that is used to calculate mathematical values)

// 17. What are comparison operators?
// comparison -- >, <, >=, <=, ==, ===, !=, !== (that is used to compare the values)

// 18. What are logical operators?
// logical -- &&, ||, ! (that is used to combine multiple conditions)

// 19. What is the difference between &&, ||, and !?
// && - 'AND' - both condition should be satisfied
//// (x=5 && y=10)
// || - 'OR' - one condition should be satisfied
//// (x=5 || y=10)
// ! - 'NOT' - reverse a bolean value
console.log(!true) // output - false

// 20. What is the difference between =, ==, and ===?
// - '==' Loose equality
// eg. -- (5 == '5')
// it will change string to number and then show output true

// - '===' Strict equality
// eg. -- (5 == '5')
// it will strictly compare string and number and then show output as false

// - '=' use to assign a value
// eg. -- let x = 10


// 21. What is the ternary operator?
/*
The ternary operator is a short way to write a simple if...else condition in JavaScript.
It is called ternary because it works with three parts:
condition ? valueIfTrue : valueIfFalse
*/

// if else - 
let age = 20
if (age >= 20) {
    console.log('Adult')
} else {
    console.log('Not Adult')
}

// same code using ternary operator
let age1 = 19

let result = age1 >= 20 ? 'Adult' : 'Not Adult'
console.log(result)


// Conditions
// 22. What is an if statement?
// if is used to check the condition provided 


// 23. What is the difference between if, else if, and else?
// if check the first condition 
// else if check the next condition if previous If one is false
// else will execute if all the previous condition false


// 24. When should we use switch?
let season = 2

switch (season) {
    case 1:
        console.log('Summer')
        break

    case 2:
        console.log('Winter')
        break

    case 3:
        console.log('Other')
        break

}

//break : "Stop executing this switch statement."



// 25. Write a program to check whether a number is positive, negative, or zero.
let number = -2

if (number > 0) {
    console.log('Positive')
} else if (number = 0) {
    console.log('Zero')
} else {
    console.log('Negative')
}


// 26. Write a program to check whether a number is even or odd.

let num1 = 11

if (num1 % 2 === 0) {
    console.log('Even')
} else {
    console.log('ODD')
}



// 27. Write a program to find the largest of three numbers.
let numb1 = 16
let numb2 = 11
let numb3 = 14

if (numb1 > (numb2 && numb3)) {
    console.log('numb1 is largest')
} else if (numb2 > (numb1 && numb3)) {
    console.log('numb2 is largest')
} else {
    console.log('numb3 is largest')
}




// 28. Write a program to check whether a person is eligible to vote.
let age2 = 17

if (age2 >= 18) {
    console.log('Eligible for vote')
} else {
    console.log('Not Eligible for vote')
}

// 29. Write a program to calculate grades based on marks.
let marks = 35

if (marks >= 90) {
    console.log('A+ Grade')
} else if (marks >= 80) {
    console.log('A Grade')
} else if (marks > 60) {
    console.log('B Grade')
} else if (marks > 35) {
    console.log('C Grade')
} else {
    console.log('Fail')
}


// Loops
// 30. What is a loop?
// 31. Explain for, while, and do...while loops.
// 32. What is the difference between break and continue?
// 33. Write a program to print numbers from 1 to 10.
// 34. Write a program to print even numbers from 1 to 20.
// 35. Write a program to print odd numbers from 1 to 20.
// 36. Write a program to print the multiplication table of 5.
// 37. Write a program to calculate the sum of numbers from 1 to 100.
// 38. Write a program to reverse a number using a loop.
// 39. Write a program to find the factorial of a number.

// Functions
// 40. What is a function?
// A function is a block of code that you define once and can execute whenever you need it

// 41. What is a function declaration?
//A function declaration uses the function keyword followed by a function name

function namenew() {
    console.log('Priyank')
}

namenew()


// 42. What is a function expression?
//A function expression is when a function is created and assigned to a variable

const newname1 = function () {
    console.log('Priyank New')
}

newname1()

// 43. What is the difference between function declaration and function expression?
/*
1. declaration uses function keyword before function creation and expression store the function
into a variable
2. declaration can be hoisting but expression can not be hoisting
*/

// 44. What are parameters and arguments?
/*
Parameter = placeholder defined in the function
Argument = actual value passed when calling the function
*/

//A parameter is a variable written inside the parentheses when we define a function
function addressnew(addr) {
    console.log(addr)
}

// An argument is the actual value that we pass to the function when we call the function
addressnew('ABCD')


// 45. What is the purpose of the return statement?
/*
return = give the result back and stop the function.
*/
function abcd(){
    return 'Priyank using return statement'
}
// show return output in terminal
const nnn = abcd()
console.log(nnn)



// 46. What happens if a function doesn't have a return statement?
// without return statement function will show undefined output automatic 
//Undefined exists as the return value, but JS doesn't automatically print return values


function lll(a, b){
    console.log(a+b)
    // return a+b
}

const newl = lll(10,5)
console.log(newl)

// 47. Can a function return another function?
// yes
function ab(){
    return '1st function'
}

function xy(){
    return ab()
}

const jj = xy()
console.log(jj)


// 48. Can a function return multiple values?
// yes it can be return using array, obj

function aa(){
    return {
        name111:'Priyank new test',
        year1: 2026
    }
}

const yy = aa()
console.log(yy)



// 49. Write a function to add two numbers.
function addnum(p,q){
return p+q
}

const uu = addnum(10,30)
console.log(uu)


// 50. Write a function to check whether a number is even or odd.
function numbr(num1){

    if(num1%2==0){
        return 'EVEN'
    }else{
        return 'ODD'
    }
    
}

const oo = numbr(11)
console.log(oo)

// 51. Write a function to find the largest number.
function mm(x,y,z){

    if(x>y&&x>z){
        return 'x is largest'
    }else if(y>x&&y>z){
        return 'y is largest'
    }else{
        return 'z is largest'
    }
}

const qq = mm(3,6,2)
console.log(qq)


// Arrow Functions
// 52. What is an arrow function?
// 53. What is the difference between a normal function and an arrow function?
// Normal - Traditional method and arrow is the latest one

// 54. Convert a normal function into an arrow function.
// Normal - 
function animal(wild){
    return wild
}

const kk = animal('Lion')
console.log(kk)

// Arrow - 
const animal1 = (wild1)=>{
    return wild1
}

const kk1 = animal1('Tiger')
console.log(kk1)



// 55. Can an arrow function have multiple parameters?
// yes

const fruits = (fruit1,fruit2)=>{
    return fruit1+ " " + fruit2
}

const we = fruits('Mango','Apple')
console.log(we)


// 56. Can an arrow function have zero parameters?
// yes
const animal2 = ()=>{
    return 'Dog'
}

const kk2 = animal2()
console.log(kk2)



// 57. What is implicit return in an arrow function?
// 58. What is the difference between explicit and implicit return?
/*
Explicit return → you write return yourself
Implicit return → JavaScript returns the expression automatically, mainly with arrow functions
*/
// explicit - 
const animal3 = ()=>{
    return 'Dog1'
}

const kk3 = animal3()
console.log(kk3)

// implicit 
const animal4 = (domestic)=> domestic

const kk4 = animal4('Dog4')
console.log(kk4)



// 59. How does this behave differently in an arrow function?
// Objects & Arrays
// 60. What is an object in JavaScript?
// we can enter multiple values in a single obj
let obj = {
    ff:'New',
    ff1:40,
    ff2:['joker', 100]
}

console.log(obj)


// 61. How do you create an object?
// 62. How can you access an object's property?
console.log(obj.ff2)
console.log(obj.ff2[0])


// 63. What is the difference between dot notation and bracket notation?
//Both dot notation and bracket notation are used to access properties of an object
// dot - 
console.log(obj.ff2)
// bracket
console.log(obj['ff'])


// 64. How do you add and delete properties from an object?
//add
obj.ff3 = 'Newly added 64'
console.log(obj)

// delete
delete obj.ff2
console.log(obj)

// 65. How do you check whether an object contains a particular key?
// 66. What is an array?
// put multiple values in a single array
let arr = ['Priyank N', 'Sw', 100, true]

console.log(arr)

// 67. What is the difference between push() and pop()?
// push uses - add values in array in the end
arr.push(20,19,0)

console.log(arr)

// pop uses - removes from the end
arr.pop()
console.log(arr)


// 68. What is the difference between shift() and unshift()?
// shift - removes from the begining
arr.shift()
console.log(arr)

//unshift - add from the begining
arr.unshift('New Priyank name added')
console.log(arr)

// 69. What is the difference between slice() and splice()?
// slice - 



//splice - 


// 70. Explain map(), filter(), and reduce().
// 71. What is the difference between forEach() and map()?
// 72. Write a program to remove duplicate values from an array.
// 73. Write a program to find the largest number in an array.
// 74. Write a program to find the second-largest number in an array.

// Promises & Async JavaScript
// 75. What is a Promise?
// Promise will give the answer in future - success or Failure

// 76. Why do we use Promises?
// it will handle asynchornious operation

// 77. What are the three states of a Promise?
// Pending, seccess, failure

// 78. What are resolve() and reject()?
// these are two elements in promise resolve meand success and reject means failure

// 79. What is .then()?
// it use to store/print success/resolve promise

// 80. What is .catch()?
// it use to store/print failure/reject promise

const promisenew = new Promise((resolve, reject)=>{
   //resolve ('Pass')
   reject('Fail')
})

// promisenew.then((resultnew)=>{

//     console.log(resultnew)
// })

promisenew.catch((issue)=>{
    console.log(issue)
})


// 81. What is .finally()?
// it will generate after suces/failure result

const promisenew1 = new Promise((resolve,reject)=>{

    reject('this one is fail')
})

promisenew1.then((output)=>{
    console.log(output)
}).catch((error1)=>{
    console.log(error1)
}).finally((final)=>{
    console.log('promise Done')

})



// 82. What is async/await?
// async is a method and await will work to change async to sync behaviour

// 83. What happens when we use await?
// without run next line will not execute 

// 84. What is synchronous vs asynchronous execution?
// 85. What is the Event Loop?
// 86. What is setTimeout()?
// wait time out in page 

// 87. What is Promise.all()?
// 88. What is the difference between Promise.all(), Promise.allSettled(), Promise.race(), and Promise.any()?
// Output-Based Questions
// 89. What will be the output?
// 20- becuse we re declare x1 and assign new value 
var x1 = 10;
if (true) {
    var x1 = 20;
}
console.log(x1);


// 90. What will be the output?
// 10
let x2 = 10;
if (true) {
    let x2 = 20;
}
console.log(x2);

// 91. What will be the output?
// undefined as this one is hoisting and var will show undefinefd
console.log(a);
var a = 10;

// 92. What will be the output?
// console.log(a);
// let a = 10;

// 93. What will be the output?
// Hello Undefined as we have not mention return
function test() {
    console.log("Hello");
}
let result1new = test();
console.log(result1new);

// 94. What will be the output?
// 10 only
function test() {
    return 10;
    console.log("Hello");
}
console.log(test());

// 95. What will be the output?

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// 96. What will be the output?
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}
// 97. What will be the output?
// ??
console.log("Start");
setTimeout(() => {
    console.log("Timeout");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise new");
});
console.log("End");

// Practical / Playwright-Oriented
// 98. Why are Promises important in Playwright?
// Promise is important in playwright because playwright is async in nature and promise 
// will handle the async operation and give the result in future - success or failure

// 99. What is the difference between await page.click() and page.click()?
// await page.click() - it will wait for the click action to complete before moving on to the next line of code.
// page.click() - it will initiate the click action but not wait for it to complete.

// 100. Explain the relationship between functions, arrow functions, Promises, and async/await in JavaScript.
/*
They all handle async operations. Function and arrow function create blocks of code that can be
executed later. Promise wil give result later in success or failure. Await will wait for 
the promise to resolve/reject before exuecting the next line.
*/

const day = 2

switch(day){
    case 1:{
        console.log('Monday')
    } break
    case 2:{
        console.log('Tuesday')
    }break

}


const promiseabcd = Promise.reject('Successfully Fail')

promiseabcd.then((finalreult)=>{
    console.log(finalreult)
}).catch((errornew)=>{
    console.log(errornew)
})











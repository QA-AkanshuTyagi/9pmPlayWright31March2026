// 3 types of Variables
//  1. Let - can be reassign but can't be redeclare, block scope like(Local variable and Global variable)
//  2. Var - can be reassign and redeclare, function scope like(Global variable)
//  3. Const - cannot be reassign or redeclare, block scope like(Local variable and Global variable)

let x = 5
x = 10 // reassign allowed 
console.log(x)

let name = "hello guys how are you"
//let name = "hello world" // redeclare not allowed
console.log(name)


var y = 5
y = 20 // reassign allowed
console.log(y)

var name1 = "hello guys how are you"
var name1 = "hello world" // redeclare allowed
console.log(name1)


const z = 5
// z = 10 // reassign not allowed
console.log(z)

const name2 = "hello guys how are you" 
// const name2 = "hello world" // redeclare not allowed
console.log(name2)  
// 3 types of Variables
//  1. Let - can be reassign but can't be redeclare, block scope {}
//  2. Var - can be reassign and redeclare, function scope {}it is called inside and outside the block
//  3. Const - cannot be reassign or redeclare, block scope {}

let x = 5
x = 10 // reassign allowed 
console.log(x)

let name = "hello guys how are you"
//let name = "hello world" // redeclare not allowed
console.log(name)

// if (true) {
//   let b = 10;
// }
// console.log(b); //  Error (not accessible outside block)


var y = 5
y = 20 // reassign allowed
console.log(y)

var name1 = "hello guys how are you"
var name1 = "hello world" // redeclare allowed
console.log(name1)

if (true) {
  var a = 5;
}
console.log(a); // ✅ 5 (accessible outside block)


const z = 5
// z = 10 // reassign not allowed
console.log(z)

const name2 = "hello guys how are you" 
// const name2 = "hello world" // redeclare not allowed
console.log(name2)  
var name ; //declaration
name="neha";// initialisation;

console.log(name);

//variable can be declarred in 3 ways
//1. var: function scoped; re declare  and re assign.
//2. let: block scoped; re assign but not re declare.
//3. const: block scoped; neither re assign nor re declare.



if(2<3){
let firstname1="shubham"
firstname1="neha"
var firstName="hero"
console.log("first",firstName)
const firstName="Rahul";
firstName="Rahul Singh Thakur"
console.log("Second",firstName)
firstName="Rahul Singh Thakur"
console.log("third",firstName)
}

console.log(firstName1)

console.log("##########################################")

const firstname2="shubham"

if(2<3){
console.log(firstname2)


}
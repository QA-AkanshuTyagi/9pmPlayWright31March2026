// Exceptional handling -- handle the error code and did not let the program crash

// error code beolw without exceptional handling
/*
let x = 10
let y = 5

//console.log(x*y)
console.log(x*z) // error as z is not defined

console.log(x+y) // this code will not execute as the program will crash at the line where z is not defined
*/

// error code with exceptional handling


// first way - try catch block

let a=10
let b=5

try {
    console.log(a*c)
}
catch(error){
    console.log("error is " + error)
}
 
console.log(a+b)


console.log("#########################################################")
// if 2nd TC is dependend on 1st on and its failing then how we can code -- 

// for example we have log in page and the home page (homepage will open after login)


function loginpage (){
    try{
        let p =20 
    console.log(p/w)
}
catch(error){
    console.log("New error is "+ error)
}

}

function homepage() {
    loginpage()
}

homepage()

// try catch finally block -- it will execute if previous code is executed or not  

console.log("#########################################################")

function loginpage1 (){
    try{
        let l =20 
    console.log(l/q)
}
catch(error){
    console.log("New last error is "+ error)
}

finally {
    console.log("This one definitely executed")
}}

loginpage1()

/*
function homepage1() {
    loginpage1()
}

homepage1()
*/
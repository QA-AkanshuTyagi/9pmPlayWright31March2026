// console.log('Priyank')
// console.log('Priyank')
// console.log('Priyank')

//Instead of writing multiple times create a function and calling it multiple times - 

function name() {

    console.log('Priyank')
}

name()


/*
Creating a function = telling JavaScript what the function should do.
Calling a function = asking JavaScript to actually do it.
*/

//Parameterized 

function newname(name) {
    console.log('HI' + " " + name)
}

newname('Priyank')
newname('Test')


//Arithmetic functions-

function addnumber() {

    console.log(10 + 20)
}

addnumber()

/*
function     addNumbers     ()       { ... }
   ↑              ↑          ↑          ↑
 keyword         name      inputs     work

*/

function addnumber1(a, b) {

    console.log(a + b)
}

addnumber1(10, 20)
addnumber1(30, 40)


//Return 
//return means: "Give this value back to the place where the function was called."
/*
return - return and save the output in function - it is not printing in terminal,
if you want to print then save it in variable then print it

console.log()
"Show this."

return
"Give this back."

return --- stop the function


*/

function addnumber2(a, b) {
    return a + b
}

const result = addnumber2(100, 120)

console.log(result)

function name() {

    return 'Priyank'
}

const newname1 = name()

console.log('Hi' + ' ' + newname1)

///////////////////////////////////////////

function user() {

    return {
        name: 'Priyank',
        Age: 100,
        College: false

    }

}

const username1 = user()
console.log(username1)

///////////////////////////////////////////////////////

function user1() {

    return ['Priyank', 250, true]

}

const username2 = user1()
console.log(username2)

///////////////////////////////////////////////////


function calculate(a, b) {

    return a + b

}
function calculate1(number) {

    console.log('Test')
    return number * 10
    console.log('Priyank') // it will not execute as it is mentioned after return statement

}

const num = calculate(5, 4)
const num1 = calculate1(num)
console.log(num1, num)


/////////////////////////////////////////////////////////////////////////////

console.log('################################################################')

// Arrow Function

/*

-- Normal function - 
function name(){

    console.log('Priyank')
}

name()

-- Arrow function 
const arrowFunction = name = ()=>{

    console.log('Priyank')
}

name()


*/

const  name1 = () => {

    console.log('Priyank Test')
}

name1()

// overriding the function

const name2 = () => {

    console.log(100)
}

name2()


const addnumber3 = (a, b) => {

    return a+b

}

const num4 = addnumber3(10,8)
console.log(num4)

/*
const       addnumber3       =       (a, b)       =>       { ... }
  ↑          ↑               ↑          ↑          ↑          ↑
keyword     name           assign     inputs     arrow      work

*/




///////////////

//this concept ---------- needs to ask

function details(){

    return {
        name:'Test',
        Add: console.log(this.name)
    }
}

const address = details()
console.log(address)


const userdetails = {
        usernew:'TestQA',
        addnew: function(){
            console.log(userdetails.usernew)
        }
    
}

console.log(userdetails)
// Arrow Function -- Short, easy, aur modern way to write functions in JavaScript.


// function declaration

function Name (newname) {
    return newname
}

// first way to write arrow function

const newname=(Yes)=>{ // use any thing (var, const, let) then function name and then = and then parameter in () and then => and then function body in {}
console.log("Aayiye Swagat hai aapka") // body me kitne bhi console pass kar skate hai
console.log(Yes) // akhri me parameter pass karna hai
}

newname("Priyank") // function call -- function name and then parameter pass karna hai

console.log("***************************************************************")

// second way to write arrow function

const newname1=Yes=>console.log(Yes) // isme ek hi console use ho skta hai, aur parameter ke liye () ka use nahi karna hai, aur body use nahi hogi

newname1("Priyank hai")

// example ---

// we have 5 add to cart items in our website

function actual(){
    let actualValue=5
    return 5
}

function TC2() {
 let expectedValue=4
 if (actual()==expectedValue) {
    console.log("Test case passed")
 } else {
    console.log("Test case failed")
 }
}
TC2()
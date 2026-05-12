// if-else statement is used to execute a block of code based on a condition.

let age = 17

if(age>21) {
console.log("You r eligible for Shadi")
}
else {
    console.log("Nahi karni hai abhi shadi")
}

console.log ("**************************************************")

//nested if else statement --- if else ke andar if else ka use kar sakte hai multiple conditions ke liye

age = 17

if(age>21) {
    console.log("You r eligible for Shadi")     

}
else if(age>18) {
    console.log("You r eligible for love")
}
else {
    console.log("Padhai me dhyan do")
}

console.log ("**************************************************")

//ifelif statement --- elif condition multiple conditions ke liye use hota hai, else if ke jagah elif ka use kar sakte hai

let statement = "Heheh hahah heheh"

if(statement.includes("nothing")) {
    console.log("Sahi hai Nothing aata hai statement me")
} else if(statement.includes("Priyank")){
console.log("Ye bhi sahi hai Priyank aata hai statement me")
}else if(statement.includes("time")){
console.log("Ye bhi sahi hai time aata hai statement me")
}
else {

    console.log("Wrong statement hai")
}


console.log ("**************************************************")

let browser = "chrome"

if(browser =="Chrome" || browser == "chrome" || browser == "CHROME")
{
    console.log("You r using Chrome browser")
} else if (browser == "Edge") {
    console.log("You r using Edge browser")
} else if (browser == "Opera"){
    console.log("You r using Opera browser")
}else {
    console.log("Not a valid browser")
}
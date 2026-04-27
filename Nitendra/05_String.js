let fName = "Nitendra";
let lName = "Gautam";

console.log(`My name is ${fName} ${lName}`)
console.log(fName.concat(" "+lName))

console.log(fName.length)
console.log(fName.slice(2, 4))
console.log(fName.toLowerCase())
console.log(fName.charAt(2))
if(fName.toLocaleLowerCase()===lName.toLocaleLowerCase()){
console.log("strings matched")
}
else{
    console.log("Strings don't match")
}

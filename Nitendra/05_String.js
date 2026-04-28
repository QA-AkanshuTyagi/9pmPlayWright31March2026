let fName = "Nitendra";
let lName = "nitendrA";

console.log(lName.charAt(2));

console.log(lName.split("").reverse().join(""));

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
let reversedName="";
for (let i=fName.length-1; i>=0;i--){
    reversedName= reversedName+fName[i];
}
console.log(reversedName)
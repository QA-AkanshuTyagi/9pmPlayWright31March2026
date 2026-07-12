
//string reverse

let name = "I want to learn Playwright" 
let sentence = name.split(" ")
let rev = " "

for(i = sentence.length-1; i>=0; i--)
{ 
    rev = rev + sentence[i] + " "
}
console.log(rev)

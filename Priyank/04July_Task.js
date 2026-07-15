/*
1.define arrow function and how we can define it in different ways
2.what is the difference between pull and clone
3.what are the different keywords in java script and define their scope
4.write a program to print prime number from 100 to 1 in reverse order.
5.write a program to print to reverse the string. HELLO TEST OF Playwright  O/P Playwright fo tset hello
6.what are the different ways to find an element.
*/

//1. Arrow function
// Two types - 1st one -- multiple console print karwa sakte hai

let name = (Nice)=>{
    console.log('Priyank')
    console.log('Srivastava')
    console.log('So jaaaa')

}
name()

// 2nd one - 1 hi console print ho sakta hai 

let name1 = Good =>console.log('Priyank Noooooooo')

name1()

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')

// 2. Pull and Clone - 
// Clone - When we copying any folder from github to our local then it will be done through CLone
// Pull - Copying updated code in any folder into our system it will be done through Pull command

//3. Keyword in JS

//4. Prime number from 100 to 1 in reverse order --------- not clear

for (let i=100;i>=1;i--){

    console.log(i)

}

for (let i = 100; i >= 2; i--) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}

console.log('############################################################')

// 5.write a program to print to reverse the string. HELLO TEST OF Playwright  
// O/P Playwright fo tset hello

let sentence = 'HELLO TEST OF Playwright'
let sen1 = (sentence.split(" "))
rev = " "

for(i=sen1.length-1;i>=0;i--){

    console.log(i)
}



//6.what are the different ways to find an element.
// xpath, CSS and Get by method


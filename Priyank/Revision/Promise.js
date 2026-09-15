//Promise 
/*
A Promise represents an operation that is not finished yet, 
but will eventually have a result.

Promise
   ↓
"Wait... I'm working"
   ↓
   ┌───────────────┐
   ↓               ↓
SUCCESS          FAILURE
   ↓               ↓
fulfilled        rejected

For example:

"I'm going to get some data from a server. I don't have the data yet, 
but I'll give it to you when I get it."

That's a Promise.
///////////////////////////////////////////////////////////////////
Getting data from a server can take some time.

JavaScript doesn't want to freeze your entire program while waiting.

Imagine:

Get data
   ↓
Wait 5 seconds
   ↓
Get result

During those 5 seconds, JavaScript can do other work.

That's where asynchronous programming comes in.

And Promises are one of the main tools JavaScript uses for asynchronous operations


*/

//Create a promise - 

const promise = new Promise((resolve, reject) => {

})

/*
Let's break it down.

new Promise
    ↓
Creates a Promise

Inside:
(resolve, reject) => {}

we have two special functions:
resolve → success
reject  → failure

Think:
resolve() → "Everything worked! ✅"
reject()  → "Something went wrong! ❌"
*/

// simple promise for succes - 

const promise1 = new Promise((resolve, reject) => {
    resolve('Success')
})

// how to get the result

const promise2 = new Promise((resolve, reject) => {
    resolve("Success")
})

promise2.then((result) => {
    console.log(result)
})

//.then() basically means:
//"When the Promise succeeds, do this."

/*
Promise
   ↓
Is it successful?
   ↓
YES ✅
   ↓
.then() runs
*/


// Promise for Reject

const promise3 = new Promise((resolve, reject) => {
    reject('Processing Failed')
})
promise3.catch((error) => {
    console.log('Failing due to', error)
})

// Differnce b/w .then() vs .catch()
/*
promise
    .then(() => {
        // SUCCESS
    })
    .catch(() => {
        // FAILURE
    });

Think:

             Promise
                ↓
        ┌───────┴────────┐
        ↓                ↓
     SUCCESS           FAILURE
        ↓                ↓
     .then()          .catch()

So:

.then() → what to do when successful

.catch() → what to do when failed
*/

const food = new Promise((resolve, reject) => {
    const Dinner = false

    if (Dinner) {
        resolve('Dinner is Ready')

    } else {
        reject('Dinner is not yet ready')

    }

})

food.then((response)=>{
    console.log(response)
}).catch((issue)=>{
    console.log(issue)
})


//simple return function

function foodnew(){

    return 'It is Pass'

}

const newresponse = foodnew()
console.log(newresponse)

/////////////////////////////////////////////////////////

// calling promise in a function

function foodnew1(){

    return new Promise((resolve,reject)=>{
        resolve('It is passed')
    })

}

foodnew1().then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
})


// Promise Pattern 
let success = false
const promise4 = new Promise((resolve,reject)=>{
    
    if(success){
        resolve('Success')
    }else{
        reject('Failed')
    }
})

promise4.then((pass)=>{
    console.log('Working fine', pass)
}).catch((error)=>{
    console.log('Something went Wrong', error)
})

/*
"What is a Promise in JavaScript?"

-- A Promise is an object that represents the eventual success or failure of an 
asynchronous operation.

In simple language - 

A Promise is JavaScript saying, "I don't have the result right now, but I'll give 
you the result later—either success or failure."

*/


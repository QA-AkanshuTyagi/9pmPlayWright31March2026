
console.log("a1 function is called")

setTimeout(() => {

console.log("f3 function is called")
},2000)

console.log("a2 function is called");

function delay(){

    return new Promise(resolve => {
        setTimeout(() => {
            resolve("i am done")
        }, 5000)
    })
}

async function runtask(){

console.log("Task started")
let result = await delay ()

console.log(result)
console.log("End")

}
runtask()
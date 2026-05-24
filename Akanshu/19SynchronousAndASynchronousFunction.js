
function delay(){

return new Promise(resolve =>{setTimeout(() => {
    resolve("I am done")        },5000)

}
)}

async function runTask(){
console.log("Task started")
let result =  await delay()

console.log(result)
console.log("End") 


}
runTask()

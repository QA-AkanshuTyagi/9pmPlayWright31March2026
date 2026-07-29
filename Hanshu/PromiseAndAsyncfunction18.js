//const { resolve } = require("node:dns")

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("i am done")
    }, 2000)
  })
}

async function runTask() {
  console.log("Task started")
  let result = await delay()
  console.log(result)
  console.log("End")
}

runTask()
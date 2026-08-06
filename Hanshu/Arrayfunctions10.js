let arr =[1,2,3,4,5]

arr.push(6,7,8,9,10) //add element at the ends of array
console.log(arr)

arr.pop()
arr.pop()

console.log(arr)

arr.shift()  // remove the first element of the array
console.log(arr)

arr.unshift(0,1)
console.log(arr)

console.log(arr.includes(8))
console.log(arr.includes(1))

// indexing
console.log(arr.indexOf(5))
console.log(arr.slice(0,3))

let arr2= [1,2,3,4,5,6,7,8,9,10]
arr2.splice(4,2, "Hansu")
// splice method is used to add or remove element from the array

console.log(arr2)
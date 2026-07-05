let arr=[1,2,3,4,5]

//push method is used to add element at the end of the array
arr.push(6,7,8,9,10) // add element at the end of the array
console.log(arr)

//pop method is used to remove the last element of the array
arr.pop() // remove the last element of the array

console.log(arr)

arr.shift() // remove the first element of the array
console.log(arr)

arr.unshift(89,91,98,101) // add element at the beginning of the array
console.log(arr)

//shift, unshift, pop , push


//includes method is used to check whether the element is present in the array or not
console.log(arr.includes(3)) // true
console.log(arr.includes(100)) // false

//indexing
console.log(arr.indexOf(101))

//slicing
//console.log(arr.slice(0,4))

//        0 1 2 3
let arr2=[1,2,4,5,6,7,8,9,10]
arr2.splice(4,2,"rahul")
//splice method is used to add or remove element from the array
console.log(arr2) // remove element from index 0 to 3

arr2.splice(4,1)
console.log(arr2)

arr2.splice(2,0)
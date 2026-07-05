let arr = [1,2,3,4,5]
// Add multiple values to the array using push and unshift but remove only one value using pop and shift.
// push is used to add an element at the end of the array
arr.push(6) // adds 6 at the end of the array
console.log(arr)
arr.push(7,8,9,10) // adds 7,8,9,10 at the end of the array
console.log(arr)

// pop is used to remove the last element of the array
arr.pop()
console.log(arr) // removes 10 from the array and returns it

//shift is used to remove the first element of the array
arr.shift() //1st element is removed and returned
console.log(arr)

// unshift is used to add an element at the beginning of the array
arr.unshift(0)
console.log(arr) // adds 0 at the beginning of the array

arr.unshift(-2,-1,11)
console.log(arr) // adds -2,-1,11 at the beginning of the array

//includes is used to check if an element is present in the array or not
console.log(arr.includes(1)) // false
console.log(arr.includes(8)) // true

//indexing is used to find the index of particular element in the array
console.log(arr.indexOf(-1)) // 1
console.log(arr.indexOf(9)) // 3
//console.log(arr.indexOf(101)) // 9

//slice is used to extrace a particular portion of the arrray and it returns a new array
console.log(arr.slice(3,8)) //  

//splice is used to add or remove elements from the array and it modifies the original array
let arr1= [101,104,201,204,301,304]
arr1.splice(1,0,102) // splice takes 3 parameters, first is the index at which we want to add or remove elements, second is the number of elements we want to remove and third is the element we want to add
console.log(arr1) // adds 102 at index 1 and removes 0 elements

arr1.splice(4,0,202,203,205) // multiple value added at index 4 and removes 0 elements
console.log(arr1) // adds 202,203,205 at index 4 and removes 0 elements

arr1.splice(2,1,103) // adds 103 at index 2 and removes 1 element
console.log(arr1) // adds 103 at index 2 and removes 104

arr1.splice(3,6,"Jain") // adds "Jain" at index 3 and removes 6 elements            
console.log(arr1) // adds "Jain" at index 3 and removes 201,202,203,205,301,304

arr1.splice(2,1) // removes 1 element at index 2
console.log(arr1) // removes 103 from the array

let arr3 = ['a','b','c','d','e']
  // removes all the elements from the array
 console.log(arr3.splice()) // [] empty array

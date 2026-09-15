/*

Types of Data types - 
1. Primitive - see below
2. Non Primitive - array, obj, function

1. string
2. number
3. boolean
4. null
5. undefined
6. symbol
7. bigint


*/

let namenew1:string = 'Priyank'
let agenew = 50.5
let office = true
let lunch = null
let dinner
let symbol1 = Symbol('ID')
let big = 12117371361838173871391839183913981313131983918398398391839183n

console.log(namenew)
console.log(agenew)
console.log(office)
console.log(lunch)
console.log(dinner)
console.log(symbol1)
console.log(big)



//Array - 
// - use multiple values in a single array
// indexing ------          0                    1             2
// subindexing ----   0       1    2  3       0   1   2        0    1
let array_arr = [['Priyank',100, -67, true],[200,85, false],['Test',90]]

console.log(array_arr[0][0])


// let sentencenew = 'Hi this is Java Script'

// // change string into array ----- split()

// console.log(sentencenew.split(" "))


// object 
// use multiple key/parameters in a single obj

let obj = {

    newname: "priyank",
    newage:100,
    arr : ['test', 123, 90],
    arr1:[['QA','DEV', 1234],['newtest', 432]]
}

console.log(obj.arr1[0][0])
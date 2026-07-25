// How to find total count in Indexing (sub elements)
//                    0                          1
// //                0       1   2      3       0     1     2
// const name = [['Priyank',60,'ABCD','PQR'],['ABC','XYZ','DEFGH']]

// console.log(name[0].length)












// // 10000 - me School aata hai -- how we know ki School me h aa rha h ki nhi?

let sent = 'My school is a wonderful place where I learn many new things every day. It has a big playground, a library, and well-equipped classrooms. My teachers are kind, helpful, and always encourage us to do our best. I enjoy studying different subjects, especially science and English'.split(' ')
// //Change in array (split('')-- kitte space dene hote hai)
// //use index of to find to word


let mango = sent[1].split('')
console.log(mango.includes('h'))
// for (let i=0; i<=mango.length-1; i++) {

//     if (mango[i]=='h'){
//         console.log('Test passed')
// }
// else {
//     console.log('Failed')
// }
// }



// // How to change Variable from string to numerical and vice versa


let num= '90'

console.log(typeof num)

let num1=Number(num)

console.log(typeof num1)

console.log(num, num1)



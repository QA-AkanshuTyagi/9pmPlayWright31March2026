let name="akanshu";


// for loop:

let arr=[1,2,3,4,5];
for(let i=0;i<=arr.length-1;i++){
console.log(arr[i]);

}

// for of loop
for(let aa of arr){

console.log(aa);


}

for(let i in arr){
console.log(i)

}

//for in loop
// to iterate over the objects;

let obj={


name:'akanshu',
age:18,
phonenumber:123456,
pincode : 123,
profession: 'IT'




}
console.log(obj.name);
for(let key in obj){

console.log(key,obj[key]);
}
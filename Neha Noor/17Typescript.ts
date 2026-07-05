let age:string="neha";
const isStudent:boolean=true;
var value:boolean=false;

console.log(age);
console.log(isStudent);
console.log(value);

function number1(n1:number){
    return n1**2;
}

function number2(n2:number){
    return n2**2;
}

number1(5)
number2(20)

function add(){
   return  number1(5)+number2(20)
}
console.log(add());

function sub(){
    return number1(5)-number2(20)
}
 console.log(sub());

function multiply(){
    return number1(5)*number2(10)
}
console.log(multiply());



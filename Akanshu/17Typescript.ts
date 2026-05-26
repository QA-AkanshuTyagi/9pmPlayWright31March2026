


let age:string="akanshu";
const isStudent:boolean=true;
var value:boolean=false;

console.log(age);
console.log(isStudent);
console.log(value);

//functions:
//javascript

function number1(n1:number){

    return n1**2;

}
function number2(n2:number){

    return n2**2;

}
number1(5)
number2(10)
function add(){
    return number1(5)+number2(10);
}

function loginPage11(firstname:string,lastname:string):string{
   firstname="neha"
console.log("full name"+"==> "+firstname+lastname)
return firstname+lastname;

}

function clickONLoginButton(){
    console.log("Login button is clicked");
}
loginPage11("akanshu","gupta");
loginPage11("rahul","tandon");


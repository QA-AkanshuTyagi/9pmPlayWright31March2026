class ConstructorConcept {

;
constructor();

constructor(name:string);
constructor(name:string, age:number);


constructor(name?:string, age?:number){
if(name===undefined && age===undefined){
console.log("this is default constructor");


}else if(age===undefined){

console.log(name);


}else if(name===undefined){
console.log(age)


}else{

   console.log(name,age)
}
}
public m1(){
console.log("This is a method");
    
}


}
const const1 = new ConstructorConcept();
const const2 = new ConstructorConcept("Akanshu");
const const3 = new ConstructorConcept("Akanshu", 25);
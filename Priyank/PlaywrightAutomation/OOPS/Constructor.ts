/*
Constructor ------
- constructor is a block of code   
jab bhi obj crate karte ho and uske bad sbse Pehle class level me jo constructor 
initiate hoga wo chalega


class constructor {

constructor(){
console.log('ABCD')
}

public m1(){
console.log('PQRS')
}

}

const const1 = new constructor()


// constructor overloading signatures


class constructor1 {

constructor1()

constructor1(name:any)
constructor1(age:any)

constructor1(name?:any, age?:any){ // ? = means optional
console.log(name, age)
}



public m2(){
console.log('PQRS')
}

}

const const1 = new constructor()
const const2 = new constructor('Priyank')
const const3 = new constructor(100)



////////////////////////////////////////////////


class constructor02{

public name:string
public age:number

constructor(name:string, age:number){
this.name=name    // jo class level pe name hai wo 
this.age=age

}

public thiskeyword(){

}

}

within the class koi dusre method me ---- .this

out side the class --- class.name (static)

fixture - already define by playwright 

readonly - not changeable 

this. - calling global  

*/

class ConstructorConcept {
  constructor() {
    console.log("This is Constructor");
  }

  public method() {
    console.log("This is method");
  }
}

const const1 = new ConstructorConcept(); // only obj create kiya --- it will call constructor
//const1.method()

// constructor overloading Signatures

class ConstructorConcept2 {
  constructor();

  constructor(a: string);
  constructor(b: number);
  constructor(a: string, b: number); // without this const4 is working

  constructor(a?: any, b?: any) {
    // ? is for Optional
    console.log(a, b);
  }

  public method2() {
    console.log("Method 2");
  }
}
const const2 = new ConstructorConcept2();
const const3 = new ConstructorConcept2("Priyank");
const const4 = new ConstructorConcept2("Priyank", 100);

class constructorConcept3 {
  constructor(name: string, year);

  constructor(name: string, year: any);

  constructor(name: string, year: number) {
    console.log(name, year);
  }
}
//new constructorConcept3(2026, 'Priyank')
// why it is working if I am passing int in 1st parameter
// we need to pass data type in line 126

new constructorConcept3("Priyank", 2026);

class ConstructorConcept4 {
  public method() {
    console.log("This is method");
  }

  constructor() {
    console.log("This is Constructor");
  }
}

new ConstructorConcept4();

/////////////////////////////////////////////////////

class abcd {
  public mm1() {
    console.log("New Method");
  }

  constructor() {
    console.log("new Constructor");
  }
}

const yy = new abcd();
yy.mm1();

//////////////////////////////////////////

class cc1 {
  constructor();

  constructor(a1: string);
  constructor(b1: number);
  constructor(a1: string, b1: number);

  constructor(a1?: any, b1?: any) {
    // what if I will provide string and number instead of any
    console.log(a1 + " " + b1);
  }
}
new cc1();
new cc1("New HI");
new cc1(100);
new cc1("Priyank Hi", 250);

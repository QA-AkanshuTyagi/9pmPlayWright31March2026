/*
Polymorphism

-- Method overriding 

-- Method overloading 

// Method overriding 

class mr1{

public test1(){
console.log('calling mr1 method')
}


}

class mr2 extends mr1{
public test1(){
console.log('calling mr2 method')
}

}


const mrr = new mr2()
mrr.test1() // local one calls

// if we want to call 1st class - use super

class mr1{

public test1(){
console.log('calling mr1 method')
}


}

class mr2 extends mr1{
public test1(){

super.test1()
console.log('calling mr2 method')
}

}


const mrr = new mr2()
mrr.test1() 

// super --- do method same name ke honge(overriding) parent or child me bhi tb super 
// ka use hoga for parent wale ko call krne ke liye and ye extended ke bad hi hoga

class mr1{
constructor(){
console.log('1st const')
}
public test1(){
console.log('calling mr1 method')
}


}

class mr2 extends mr1{
constructor(){
super() 
console.log('2nd const')
}
public test1(){
console.log('calling mr2 method')
}

}


const mrr = new mr2()

// super.method -- calling parent method that has been overidden by child method having same name
// super() -- calling parent constructor

*/

class superConcept {
  public ps() {
    console.log("class 1 ps method");
  }

  public ps1() {
    console.log("class 1 ps1 method");
  }
}

class superConcept1 extends superConcept {
  public ps() {
    super.ps();
    super.ps1();
    console.log("2nd class ps method");
  }
}

const ss = new superConcept1();
ss.ps();

// super Concepr for Constructor

class superConstuctor {
  constructor() {
    console.log("constructor 1 is calling");
  }
}

class superConstuctor1 extends superConstuctor {
  constructor() {
    super();
    console.log("constructor 2 is calling");
  }
}

const ff = new superConstuctor1();

// parameterized constructor

class superConst {
  constructor(name) {
    console.log("Hi" + " " + name);
  }
}

class superConst1 extends superConst {
  constructor() {
    super("Priyank");
    console.log("Hi This is new class");
  }
}

const gg = new superConst1();

/////// 20/09

class sept {
  constructor() {
    console.log("Hi ABCD");
  }

  public mu1() {
    console.log("Method 1 of class 1");
  }
}

class septnew extends sept {
  constructor() {
    super();
    console.log("HI new abcd");
  }

  public mu1() {
    console.log("Method 1 of 2nd class");
    super.mu1();
  }
}

const yy = new septnew();
yy.mu1();

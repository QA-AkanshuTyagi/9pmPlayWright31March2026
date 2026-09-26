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


*/

class MethodOverriding {
  public pr1() {
    console.log("1st class method");
  }
}

class MethodOverriding1 extends MethodOverriding {
  public pr1() {
    console.log("2nd class method");
  }
}

const mm = new MethodOverriding1();
mm.pr1();

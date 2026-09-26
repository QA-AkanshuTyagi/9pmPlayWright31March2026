/*
Encapsulation -------------------

// Data ko wrap kar deta hai into class and then controlling how that data can be accessed.

// 1. Private --- no access
// 2. Protected -- through extends 
// 3. Public --- accessible (obj, extends)

// Teeno access modifier ko access karne ka tareeka change ho rha hai 

// wrap -- through access specifier

// 4. Read Only
// 5. Getter and Setter Method


// Public, Private, Protected, Read Only, Getter and Setter Method 
// All access mil ke Encapsulation banate hai


// Getter and Setter Method -- Value ko get karna and set karna


class Employees {

private salary:number;

constructor(salary:number){
this.salary=salary;
}

get getSalary():number{
return this.salary;
}

set getSalary(value:number){
if (value>0){
this.salary = value;
}
}


}

const emp = new Employees(10000);
console.log(emp.getSalary)

emp.getSalary = 20000
console.log(emp.getSalary)




// Read Only 
// Class ke andr jo bhi property ho - variable, methods 
// ek bar hi assign ho uske bad kabhi change na ho - not changeable 
// wrapping data/methods inside the class and controlling they can be accessed


class Employees {

readonly salary:number;

constructor(salary:number){
this.salary=salary;
}


}

const emp = new Employees(10000);
emp.salary = 20000
console.log(emp.getSalary)

*/

class employees {
  private salary: number;

  constructor(salary: number) {
    this.salary = salary;
    //console.log(this.salary);
  }

  get getsalary(): number {
    return this.salary;
  }

  set getsalary(value: number) {
    if (value > 0) {
      this.salary = value;
    }
  }
}

const emp = new employees(10000);
console.log(emp.getsalary);

emp.getsalary = 25000;

console.log(emp.getsalary);

class employees1 {
  readonly salary: number;

  constructor(salary: number) {
    this.salary = salary;
    //console.log(this.salary);
  }
}

const emp1 = new employees1(15000);
//emp1.salary = 25000; /// why it is executing??

console.log(emp1.salary);

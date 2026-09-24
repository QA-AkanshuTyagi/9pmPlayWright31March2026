// class Employee {
//   private salary: number;

//   constructor(salary: number) {
//     this.salary = salary;
//   }

//   get empsalary(): number {
//     return this.salary;
//   }

//   set empsalary(value: number) {
//     if (value > 0) {
//       this.salary = value;
//     }
//   }
// }
// const emp = new Employee(320000);

// console.log(emp.empsalary);

// emp.empsalary = 600000;

// emp.empsalary = 100000;

// console.log(emp.empsalary);

///read only================================================================
class Employee {
  readonly salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

const emp = new Employee(320000);
emp.salary = 50000;
const emp1 = new Employee(21000);
console.log(emp, emp1);

let student = new Map();
student.set("name", "amit");
student.set("age", 25);
student.set("studentid", 101);

console.log(student.get("name"));
console.log(student.size);
student.delete("age");

console.log(student.size);
//student.clear();
console.log(student.size);
student.forEach((value) => {
  console.log("Each value", value);
});
let students = new Map([
  ["name", "rahul"],
  ["age", 21],
  ["adress", "ghaziabad"],
]);
console.log(students);

let obj = {
  Name: "akanshu",
  age: 26,
  age: 27,
};
console.log((obj.newname = "aka"));
console.log(obj);

let numbers = new Set([10, 20, 10, 30, 10, 40]);
numbers.add(10);
console.log(numbers.has(20));
console.log(numbers);
numbers.delete(20);
console.log(numbers);
//numbers.clear();
console.log(numbers);
numbers.forEach((value) => {
  console.log(value);
});

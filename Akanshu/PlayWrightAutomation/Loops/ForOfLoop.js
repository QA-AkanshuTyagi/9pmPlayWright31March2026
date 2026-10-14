let names = ["akanshu", "priyank", "varesha", "aishwarya", "nikhil"];

let value = 10;
console.log(value);
// console.log(names[1]);
//for loop ---
//for of---

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("=============================================");
for (let name of names) {
  console.log(name);
}

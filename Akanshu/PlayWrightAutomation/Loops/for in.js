let details = {
  fname: "shivam",
  lname: "tyagi",
  age: 21,
  adress: "Ghaziabad",
};

console.log(details.fname);

for (let i = 1; i < 5; i++) {
  console.log(details.fname);
}
console.log("=======================");
for (let each in details) {
  console.log(details.fname);
}

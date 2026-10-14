let details = {
  firstPerson: {
    fname: "ankita",
    lname: "shrma",
    age: 20,
    adress: "gzb",
  },

  secondPerson: {
    fname: "aishwarya",
    lname: "bajpayee",
    age: 23,
    adress: "rajnagar",
  },

  Thridperson: {
    fname: "nikhil",
    lname: "singh",
    age: 17,
    adress: "haridwar",
  },
};

for (let person in details) {
  for (let each in details[person]) {
    console.log(each, details[person][each]);
  }
}

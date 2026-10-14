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

for (each in details) {
  console.log(each[firstPerson][fname]);
}

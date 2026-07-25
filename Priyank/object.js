//Object is a collection of key value pairs. It is used to store multiple values in a single variable. It is also used to represent real world entities.
let person = {
    name: "Priyank",
    name :  "S", // let re-assign is allowed, if we have duplicate keys in an object, the last key will overwrite the previous key
    age: 100,
    isStudent: true
}

console.log(person); // { name: "S", age: 100, isStudent: true }
console.log(person.name); // S
console.log(person.age); // 100
console.log(person.isStudent); // true

//Object with Arrays
let carDetails_variation = {
    car1: ["Maruti","Wagonr",2020,"Grey"], // 1D array in an object
    car2: ["Hyundai","i20",2021,"White"], // 1D array in an object
    car3: ["Tata","Sierra",2026,"Black"], //
    car4: [["Maruti","Wagonr",2020,"Grey"],
          ["Hyundai","i20",2021,"White"], 
          ["Tata","Sierra",2026,"Black"]]   //2D array in an object  
}
console.log(carDetails_variation); // { car1: ["Maruti","Wagonr",2020,"Grey"], car2: ["Hyundai","i20",2021,"White"], car3: ["Tata","Sierra",2026,"Black"] }
console.log(carDetails_variation.car1); // ["Maruti","Wagonr",2020,"Grey"]
console.log(carDetails_variation.car3[1]); // Sierra
console.log(carDetails_variation.car2[3]); // White

console.log(carDetails_variation.car4[0][1]); // Wagonr
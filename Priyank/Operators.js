
//Types of Operators in JavaScript - Arithmetic, Assignment, Comparison

//1. Arithmetic Operators: +, -, *, ** , /, %

let a = 10;
let b = 5;  
console.log("Arithmetic Operators");    
console.log(a + b); // 15 addition
console.log(a - b); // 5 subtraction
console.log(a * b); // 50 multiplication
console.log(a / b); // 2 division
console.log(a % b); // 0 modulus (remainder of a divided by b)
console.log(a ** b); // 100000 square of a to the power of b 10^5

//2. Relational/Comparison Operators: >, <, >=, <=, ==, ===, !=, !==
 let num1 = 10;
 let num2 = 20;
 console.log("Relational/Comparison Operators");
 console.log(num1 > num2); // false
 console.log(num1 < num2); // true
 console.log(num1 >= num2); // false means num1 is greater than or equal to num2 (num1 > num2 or num1 == num2)
 console.log(num1 <= num2); // true  means num1 is less than or equal to num2 (num1 < num2 or num1 == num2)
 console.log(num1 == num2); // false (loose equality operator, it checks only value (value is same or not))
 console.log(num1 === num2); // false (strict equality operator, it checks both value and type (value and type both are same))
 console.log(num1 != num2); // true (loose inequality operator, it checks only value)
 console.log(num1 !== num2); // true (strict inequality operator, it checks both value and type)

 //3. Assignment Operators: =, +=, -=, *=, /=, %=,x**= 

    let x = 10;
    console.log("Assignment Operators");
    console.log(x); // 10

    x+=5; 
    //x+=5 means x = x + 5 (x is assigned the value of x + 5)   
    console.log(x); // 15
    x-=3;
    //x-=3 means x = x - 3 (x is assigned the value of x - 3)
    console.log(x); // 12

    x*=10;
    //x*=3 means x = x * 10
    console.log(x); //120

    x/=20;
    //x/=20 means x = x / 20
    console.log(x); //6

    x%=4;
    //x%=5 means x = x % 4
    console.log(x); //2

    x**= 8;
    //x**=8 means x = x ** 8 (x^8 x ki power 8)
    console.log(x); //256

// Arrow Functions in JavaScript
//1. 1st way to write the arrow functions

const clickOnLoginButton = () => {
    console.log("Login button clicked");
}

const clickOnLogoutButton = () => {
    console.log("Logout button clicked");
}   

//Parameterized function
const multiplication = (a,b) => {
    console.log(a*b);
}   
// calling the functions
clickOnLoginButton();
clickOnLogoutButton();
multiplication(5,10);   

// 2nd way to write the arrow functions when we have only one parameter in the function then we can write the parameter without parenthesis and also we can write the function body without curly braces and also we can write the return statement without using the return keyword.
// its working only in single line of code in the function body.
const domainName = domain => console.log("The domain is: " + domain); // this is the same as writing const domainName = (domain) => { console.log("The domain is" + domain); }

domainName("www.google.com"); // calling the function


const num1 = value1 => value1; // this is the same as writing const num1 = (value1) => { return value1; }   
const num2 = value2 => value2; // this is the same as writing const num2 = (value2) => { return value2; }
const sum = () => console.log("The sum of num1 and num2 is: " + (num1(10) + num2(20))); // this is the same as writing const sum = () => { console.log("The sum of num1 and num2 is: " + (num1(10) + num2(20)); }

sum(); // calling the function  



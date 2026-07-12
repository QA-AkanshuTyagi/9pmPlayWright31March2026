
//Types of function in JavaScript
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function    

function clickOnLoginButton(){
    console.log("Login button clicked");
}

function clickOnLogoutButton(){
    console.log("Logout button clicked");
}

// calling the functions
clickOnLoginButton();
clickOnLogoutButton();

// Parameterized function
function multiplication(a,b){
    console.log(a*b);
}

function subtraction(a,b){
    console.log(a-b);
}   

multiplication(5,10)
subtraction(10,5)

// overriding the function
function login(username,password)
{
    console.log("Username: " + username);
    console.log("Password: " + password);
    console.log("Tet");
}

 login("Shashank","Shashank@123") // method caling every where because JavaScript is not a object oriented programming language, we can call the function anywhere in the code
// chahe function create krne se phele ho ya baad me, we can call the function anywhere in the code, but it is always recommended to call the function after creating it, so that we can avoid any confusion and also it will be easy to understand the code.
function login(username,password)
{
    console.log("Username: " + username);
    console.log("Password: " + password);
}

login("Jain","Shashank@123")
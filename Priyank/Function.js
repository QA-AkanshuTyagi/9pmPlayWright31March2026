
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
    console.log("New");
}

 login("Priyank","Tst@123") // method caling every where because JavaScript is not a object oriented programming language, we can call the function anywhere in the code
// chahe function create krne se phele ho ya baad me, we can call the function anywhere in the code, but it is always recommended to call the function after creating it, so that we can avoid any confusion and also it will be easy to understand the code.
function login(username,password)
{
    console.log("Username: " + username);
    console.log("Password: " + password);
}

//login("Priyank","Tst@123")



// function declaration 


// Create function for Insta Login 

function username(User) { // function name = username and it takes one parameter = 'User'
 return User // always pass paramaeter after return statement   
 //console.log("Hello User") // this line will never be executed because it is after the return statement

}

function password(pass) {
    return pass
}

function TC1(){
Name= username("Priyank") ;// function call
PassCode= password(123456) ; // = se pehle koi bhi random function name de sakte hai, = ke bad jo function upar banaya hai uska name dena hai aur uske andar parameter pass karna hai.
if (Name==="Priyank"&& PassCode===123456){ // yahan pe jo upar random function name diya hai usko use karna hai, aur uske andar parameter pass karna hai
console.log('Login Success')
} else {
    console.log("Login nahi hua")
}}

TC1()
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
} else {
    console.log("Login nahi hua")
}}

TC1()
function num1(value1)
{
    return value1;
    //console.log("Hello User") // this line will never be executed because it is after the return statement

}  

function num2(value2)
{
    return value2;
}

function sum()
{
    sum1 = num1(10) + num2(20);
    console.log("The sum of num1 and num2 is: " + sum1);
}

sum();

// 1st way to write the parameter value when we are calling the function
function enterUserName(username)
{
    return username;
}

function enterPassword(password)
{
    return password;
}

function login(username,password)
{
    if (enterUserName(username) && enterPassword(password)) {
        console.log("Login Successful");
    } 
    else {
        console.log("Invalid Username or Password");
    }
    
}

login("admin","admin@123");

//2nd way to write the parameter value under the calling function
function userName(loginUsername)
{
    
    return loginUsername;
}

function password(loginPassword)
{
    return loginPassword;
}

function loginDetailsTc01(username1,password1) // we have pass the value in the calling function taking a variable and that variable pass in the parameter of the calling function. 
{
   username1 = userName("Shashank");
   password1 = password("admin");   

   if(username1 === "Shashank" && password1 === "admin"){
    console.log("Shashank Login Successful");
   } else {
    console.log("Invalid Username or Password");
   }      
}

loginDetails("Shashank","admin");


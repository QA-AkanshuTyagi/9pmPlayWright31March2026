function enterUsername(username){
    console.log("Username enterned :" + username);

}
function enterPassword(password){
    console.log("Password entered: " + password);

}
function login(username, password){
    enterUsername(username);
    enterPassword(password);
    console.log("Login succesfull");

}
enterUsername("akanshu@gmail.com")
enterPassword("12345678")
login("akanshu@gmail.com", "12345678")

// second function

function enterUsername(username){
return username
}
function enterPassword(password){
    return password
}
function login(){
    username1 = enterUsername("Akanshu");
    password1 = enterPassword("12345678");
console.log('Username: ${username1}
Password: ${password1}');
}

login()
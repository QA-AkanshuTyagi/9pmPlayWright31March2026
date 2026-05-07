
function enterUserName(name,age,married){

return name
console.log(age)

}
function enterPassword(password){   

return password

}

function testCase1(){
username=enterUserName("Akanshu",30,false);
password=enterPassword(12345678);
if(username==="Akanshu" && password== 12345678){
console.log("login successful")

}



}
function homePage(){
console.log("welcome to home page")
}
testCase1()
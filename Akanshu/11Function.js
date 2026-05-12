
function enterUserName(name,age,married){

return [name,age,married]


}
function enterPassword(password){   

return password

}

function testCase1(){
    age=19
username=enterUserName("Akanshu",30,false);
password=enterPassword(12345678);
if(age>18){
console.log(username)

}



}
function homePage(){
console.log("welcome to home page")
}
testCase1()
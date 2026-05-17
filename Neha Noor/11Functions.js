function enterUserName(name,age,married){
    return [name,age,married];
}

function enterPassword(password){
    return password;
}

function testCase1(){
    age=19
    username=enterUserName("Neha",30,false);
    password = enterPassword("Neha123");
    if(age>=18){
        console.log("username"+ username)
    }
}

testCase1()

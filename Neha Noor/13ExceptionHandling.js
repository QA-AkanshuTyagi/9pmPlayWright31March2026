let a=10;
let b=0;

function loginPage(){
    try {
        console.log(a/c)
    }
    catch(error){
    console.log("error is"+ error)
    }
   console.log("hellow world")

}

function homePage(){
    loginPage()
}
homePage()

console.log("##################")

function loginPage1(){
    try{
        let a1=10;
        console.log(a1/d)
    }
    catch(error){
        console.log("1stError")
    }
    finally{
        console.log("finally block is executed")
    }
}
loginPage1()


function DomainName(domainname){
return true
}

//first way to write arrow function


const domainName=(dom)=>{
console.log("rahul hello")
console.log(dom)

}
//secondway to write arrow function

const domainName1=dom=>console.log(dom)
    
   function fetchingValue(){
    let actualValue=2;
   return actualValue
   } 
   function testCase2(){
    let expectedValue=2;
    if(fetchingValue()==expectedValue){
        console.log("test case passed")
    }   ;
   }
testCase2()
console.log(DomainName("www.facebook.com"))
domainName1("www.google.com")

login=()=>{
    console.log("login successful")
};
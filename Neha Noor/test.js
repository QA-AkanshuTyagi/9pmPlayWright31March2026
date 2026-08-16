/*arrow function=> parametrize and non parametrized

const f1=(n1:numb):number=>{
    return type
    }*/

    /*git clone copies all file to local server while pull fetches the changes from repository or update it*/ 

    /*different ways to find an element in playwright
    1. By role
    2. By text
    3. By placeholder,label,by Alt text
    4. By CSS selector
    5. By XPath
    6. By ID        */

//WAP to print prime number in reverse order


for(i=100;i>=2;i--){
let isprime= true;

for(j=2;j<=i-1;j++){
if(i%j==0){
isprime=false;
break;  

}
}
if(isprime==true){
console.log(i)
}
}
let name="hello test of playwright";
let nameArray=name.split(" ");
rev="";


for(i=nameArray.length-1;i>=0;i--){
if(i>=1){
rev=rev+ " "+nameArray[i];
}
}
console.log(rev);

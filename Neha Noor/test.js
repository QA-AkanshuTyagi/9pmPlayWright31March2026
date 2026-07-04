/*arrow function=> parametrize and non parametrized

const f1=(n1:numb):number=>{
    return type
    }*/

    /*git clone copies all file to local server while pull fetches the changes from repository or update it*/

//WAP to print prime number in reverse order

/*let n=100;
for(i=2;i<=n;i++){
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
}*/

let name="hello test of playwright";
let nameArray=name.split(" ");
rev="";


for(i=nameArray.length-1;i>=0;i--){
if(i>=1){
rev=rev+ " "+nameArray[i];
}
}
console.log(rev);

//WAp To print even no.

/*for(let i=0;i<=100;i++){
if(i%2!=0){

console.log(i)

}    

}

// WAp To print prime no.
x
let n=100;
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
}


    // WAP to print fibonacci series

    let first=0;
    let second=1;

    for(i=0;i<10;i++){
console.log(first);
        next= first+second;
first=second;

second=next;

    }*/
//WAP to print palandrome no.
//const prompt = require("prompt-sync")();
//let name= prompt("enter the name");
let name="madamma"
let rev=""
for(i=name.length-1;i>=0;i--){
rev= rev+name[i]
console.log("rev"+"===>"+rev)
}
if(name==rev){
console.log("it is palindrome" +":  "+ rev)
}else{

    console.log("it is not palindrome" +":  "+ rev)
}

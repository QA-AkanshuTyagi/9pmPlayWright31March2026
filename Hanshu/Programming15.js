// write a program to print even no.

for(let i=0; i<=100;i++){
if(i%2!=0){

console.log(i)    
}
}

// write a program to print prime no.

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

// write a program to print fibonacci series

    let first=0;
    let second=1;


    for(i=0;i<10;i++){
console.log(first);
    next= first+second;

first=second;
second=next;    
    }

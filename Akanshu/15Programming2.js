//1st Question

//i/p: akanshu is my name 
//o/p: name my is uhsnaka

/* let name="akanshu is my name" ; // name my is uhsnaka 
let nameArray=name.split(" ");
rev="";
for(i=nameArray.length-1;i>=0;i--){
if(i>=1){
rev=rev+ " "+nameArray[i];
}
else if(i==0){
    rev3= "";
    
for(j=nameArray[i].length-1;j>=0;j--){
rev3= rev3+nameArray[i][j];
}


}



}
rev4= rev + " "+ rev3;
console.log(rev4) */

//2nd Question

//i/p: palindrome : wow, arora, madam, malayalam

//o/p: palindrome : wow, arora, madam, malayalam

let sentence="hi rahul how are you" ; // you are woh luhar hi

let sentenceArray=sentence.split(" "); // ["hi", "rahul", "how", "are", "you"]
rev=" ";
for(i=sentenceArray.length-1;i>=0;i--){

if(i==1 || i==2){
for(j=sentenceArray[i].length-1;j>=0;j--){
  rev=rev+sentenceArray[i][j]  
}
rev=rev+ " ";
}else{

rev=rev+sentenceArray[i]+ " ";


}

}
console.log(rev.trim())
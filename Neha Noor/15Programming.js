/*let name="neha is my name";

let nameArray=name.split(" ");
rev=" "
for(i=nameArray.length-1;i>=0;i--){
    if(i>=1){
    rev=rev+"  "+nameArray[i];
}

else if(i==0){
    rev2="   ";

    //firstIndex=nameArray[i];
    for(j=nameArray[i].length-1;j>=0;j--){
    rev2=rev2+nameArray[i][j];
    
    }


}
}
rev3=rev + "  " + rev2;
console.log(rev3);*/

let sentence="hi neha how are you";
let sentenceArray=sentence.split(" ");

rev=" ";
//console.log(sentenceArray);
for(i=sentenceArray.length-1;i>=0;i--){
    if(i==1 || i==2){
        for(j=sentenceArray[i].length-1;j>=0;j--){
            rev = rev +  sentenceArray[i][j];
        }
        rev = rev + " ";
    } else {
        rev = rev+sentenceArray[i]+" ";
    }
}
console.log(rev.trim());

let age = 17;
let gender = 'Female';

if(gender== 'Female'){
    if(age>=18){
    console.log(`Female above 18 are eligible to get married as per law`);
    }
    else{
        console.log(`As a woman, you are legally not eligible to get marry`)
    }
}
else{
    if(gender=='Male'){
        if(age>=21){
            console.log(`Males above 21 are eligible to get married as per law`)
        }
        else{
            console(`As a man, you are not eligible to get marry`)
        }
    }
}
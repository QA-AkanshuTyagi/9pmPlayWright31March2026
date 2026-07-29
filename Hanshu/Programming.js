actual = "madam"
expected=""
for(i=actual.length-1;i>0;i--){

expected=expected+actual[i]


}
if (actual==expected){

console.log("it is palindrome" +":  "+ expected)

}
else{

    console.log("it is not palidrome" +":  "+ expected)

}
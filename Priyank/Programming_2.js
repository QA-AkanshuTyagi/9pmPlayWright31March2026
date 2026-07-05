// i/P -- "Priyank is Learning JAVA Script"
// O/p -- "Script JAVA Learning is knayirP"

let name = "Priyank is Learning JAVA Script"
let name1 = (name.split(" "))
 rev = " "

for (i=name1.length-1;i>=0;i--) {

if (i>=1) {
    rev = rev + " " + name1[i]
} 
else if (i==0) {
rev2 = " "

for(a=name1[i].length-1;a>=0;a--){
rev2 = rev2 + name1[i][a] 
}

}
}
console.log(rev + " " + rev2)

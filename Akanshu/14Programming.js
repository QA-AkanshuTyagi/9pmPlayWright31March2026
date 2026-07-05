// WAP to reverse the string;

let name="akanshu is my name" ; // eman ym si uhskana
let rev1="";
for(i=name.length-1;i>=0;i--){

rev1= rev1+name[i]


}
console.log(rev1)

let names = name.split(" ");

console.log(names)
rev="";
for(i=names.length-1;i>=0;i--){
rev= rev+ " "+names[i]
rev=rev.trim()
}
console.log(rev.split(" "))



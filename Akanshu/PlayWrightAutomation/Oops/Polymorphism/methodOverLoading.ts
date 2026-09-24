class methodOverLoading{

 add(a:number, b:number):number; //signature
 add(a:string,b:string):string; //signature overloading
 add (c:boolean,d:number):any//signature
add (x:any, y:any):any{
 console.log("helllo")                                         //method
return x+y

}



}
let cal=new methodOverLoading
console.log(true)
console.log(false)
console.log(cal.add(10,20));
console.log(cal.add("rahul","sharma"));
console.log(cal.add(true,10))
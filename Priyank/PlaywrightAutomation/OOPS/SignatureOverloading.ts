/*

--------Encapsulation 

Method Overloading 

- Non parameterized 
- Parameterized 


- non parameterized 

class method{

public add(){

}
}

- parameterized 

class method{

public add(a:string){

}
}


////////////////

class method{

public add(){

}

//wrong way
public add(){}  ******

//right way -- Signature
public add(a:number):number


}

/////////////////

class method1{

add(a:number):number // signature

add(a:number):number {  // method
return a+b
}


}

class method1{

add(a:number):number // signature
add(a:string):string // signature overloading

add(a:any):any {  // method
return a+b
}


}

class method1{

add(a:number, b:number):number // signature
add(a:string: b:string):string // signature overloading
add (c:string,d:boolean):any // signature
add(a:any):any {  // method
return a+b
}


}

let meth = new method1

console.log(meth.add(10,20))
console.log(meth.add('test','QA'))
*/

class methodOverloading {
  sig(a, b): number; // signature
  sig(a, b): string; // signature overloading

  sig(a, b): any {
    //method
    return a + b;
  }
}

let meth = new methodOverloading();

console.log(meth.sig(2, 5));
console.log(meth.sig("Priyank", "Test"));

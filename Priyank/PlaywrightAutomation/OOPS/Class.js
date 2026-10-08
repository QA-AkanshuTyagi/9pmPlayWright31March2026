/*

OOPS Concept ---

// Class and Object

// oops - Object oriented programming system
-- Inheritance
-- Encapsulation
-- Abstraction
-- Polymorphism



// class --- Blueprint which contains methods, variables, constructor 
class --- block
which contains -{ }
{} -- jiske andr sare methods hote hai

// jb koi method {} bahar hota hai use hum function bol dete hai aur agr iske andr to use method keh dete h


JAVA -- access_specifier modifer returntype method_name 
public static void method1(){}

TS/JS -- access_specifier modifer method_name returntype
public static method1 (){
}






// JS syntax ---- Access specifier -- Modifier Name(): returntype{

}

// public non static Login():void{
}

// if we write like - Login():void{

// by default specifier is public
// by default modifier is non static


// Access Specifier -- mera method kaha kaha use ho skta hai --- Only for TS not in JS
in JS by default it will be public only
-- public
-- private
-- protected 

public --- it can be access anywhere
- class 1 - method A
- class 2 - we can use method A here too without inheritance concept


private --- it can not be access anywhere


protected --- it can be use only by Inheritance outside the class (Extends keyword)

// obj create krte h phle
login.f1()
eg --- 

class Login{

 static F1(){

}
public loginpage():void{


}

}

-- Modifier 
- Static -- when we want to call method by name
- Non static -- when we don't want to call method by name


*/

class LoginPage {
  static login() {
    console.log("Public login method");
  }
}

//LoginPage.login() // outside the class -- classname.method

class home {
  hp() {
    LoginPage.login();
  }
}

const homePage = new home();
homePage.hp();

class newone {
  static newone() {
    // all access specifier not working in JS

    console.log("Protected method");
  }
}

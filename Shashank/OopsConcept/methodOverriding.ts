//Method overriding means same method present in the parent and child class with the same name and same number of arguments.
//Super keyword (super.meyhod()): is used to call the parent class method from the child class method. It is used to access the properties and methods of the parent class.
//Super Calling: is used to to call the parent class constructor from the child class constructor. It is used to initialize the properties of the parent class in the child class.
class student{
    public stu_Detail()
    {
        console.log("Hi, I am a Student")
    }

    constructor(name:string)
    {
        console.log("1st Constructor : " + name)
    }

    test()
    {
        console.log("Test Method")
    }
    
}

class details extends student{
    public stu_Detail()
    {
        super.stu_Detail() // metod overriden using super keyword.
        console.log("name: Shashank")
    }

    constructor()
    {
        super("Jain") // using super calling to call the parent class constructor .
        console.log("2nd Constructor")
    }

     test()
    {   
        super.test()
        console.log("Test 2 Method")
    }
}

const obj = new details();
obj.stu_Detail();
obj.test();
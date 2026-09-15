class ConstructorConcept02 {

 public name:String;
  public age:number;

constructor(name:String, age:number){
this.name= name;
this.age=age;
}
public thisKeyWordConcept(){

console.log(this.name,this.age )


}

}
 const cc= new ConstructorConcept02("Akanshu",25);

cc.thisKeyWordConcept();













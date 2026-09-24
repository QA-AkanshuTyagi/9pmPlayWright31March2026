class Sc1 {
  constructor(name: string) {
    console.log("calling 1st method" + name);
  }
}
class Sc2 extends Sc1 {
  constructor() {
    console.log("calling 2nd method");
    super("akanshu");
  }

  public test1() {
    console.log("calling mr2 method");
  }
}
const sc2 = new Sc2();
// super.method(): to call parent method that has been overidden by child method having same name as of parent method
//super calling: when we want to call parent constructor.
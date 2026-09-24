class mr1 {
  public test1() {
    console.log("calling mr1 method");
  }
  public test2() {
    console.log("test2");
  }
}
class mr2 extends mr1 {
  public test1() {
    super.test1();
    console.log("calling mr2 method");
  }
}
const mr = new mr2();

/*
INHERITANCE ------------


this (keyword represents - parent class ko)

class parent{

eye{

}
nose{

}

}

class child extends parent {

}

const cc = new child
cc.eye()



*/

class parent {
  protected static child1() {}
}
class Child extends parent {
  child2() {
    parent.child1();
  }
}



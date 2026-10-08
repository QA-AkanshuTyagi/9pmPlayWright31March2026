/*
-- Modifier 
- Static -- when we want to call method by class name
- Non static -- when we don't want to call method by class name

 
static - class level
--modifier.modifier2() // directly

non static - object level - 
-- const mf = new modifier()
-- mf.modifier1()

*/


class modifier{

method1(){
  console.log('Method 1 - Non-Static')
}

static method2(){
  console.log('Method 2 - Static')
}

}

modifier.method2() // static will call directly by class name - class_name.method_name()
//modifier.method1() // it will show and error as its an non static

// to call non static method - use object
const obj = new modifier
obj.method1() 

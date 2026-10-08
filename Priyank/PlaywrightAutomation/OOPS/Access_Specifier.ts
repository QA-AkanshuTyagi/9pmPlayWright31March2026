
class LoginPage {

  static login() {

    console.log('Public login method')

  }

}

//LoginPage.login() // outside the class -- classname.method

class home {

  hp() {

    LoginPage.login()

  }


}

const homePage = new home()
homePage.hp()


class newone {

  protected static newone() {// all access specifier not working in JS

    console.log('Protected method')
  }

}

class second extends newone {

  method() {

    newone.newone()
  }

}

const new1 = new second
new1.method()


class Allclass{

private method1(){

  console.log('Private')
}

method2(){

  console.log('Public')
}

protected method3(){

  console.log('Protected')
}

}

const CL = new Allclass
//CL.method1()
CL.method2()
//CL.method3()


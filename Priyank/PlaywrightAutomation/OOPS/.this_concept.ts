// this. use for calling a globally variable into the classes

class thisConcept {
  userName = "Priyank";
  userPassword = 123456;

  constructor() {
    // this.userName;
    // this.userPassword;
    console.log(this.userName, this.userPassword);
  }

  public hero() {
    console.log("Hero method");
    console.log(this.userName);
  }
}

const hh = new thisConcept();
hh.hero();

class thisConcept1 {
  userName1: string;
  userPassword1: number;

  constructor(uname: any, upass: any) {
    this.userName1 = uname;
    this.userPassword1 = upass;
    console.log(uname, upass);
  }

  public hero1() {
    console.log("Hero1 method");
  }
}

// const hh1 = new thisConcept1("Priyank_Test", 232312312);

// 20

class tables {
  IName: string;
  PPName: number;

  constructor(hh1: string, hh2: number) {
    this.IName = hh1;
    this.PPName = hh2;

    console.log(this.IName);
    console.log(this.PPName);
  }

  public newqq() {
    console.log(
      "Hi this is a method of this concept" + " " + this.IName,
      this.PPName,
    );
  }
}

const rr = new tables("Priyank RRR", 111);
rr.newqq();

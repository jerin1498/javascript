class Person {
  constructor(name, age) {
    this.name = name; // properities
    this.age = age;
  }

  detail() {
    // method
    console.log(`my name is ${this.name} and my age is ${this.age}`);
  }
}

const jerin = new Person("jerin", 27); // instince

// console.log(jerin instanceof Person);

// const ligi = new Person("ligi", 25);

// jerin.detail();
// ligi.detail();

class Student extends Person {
  constructor(school, name, age) {
    super(name, age);
    this.school = school;
  }

  mySchool() {
    console.log("my school name is", this.school);
  }
}

const studentLigi = new Student("excel", "ligi", 23);

studentLigi.mySchool();
studentLigi.detail();

'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

//console.log(jonas, matilda, jack);

//prototypes
//console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

//adding properties
Person.prototype.species = 'Homo Sapiens';
//console.log(jonas.species, matilda.species);

//accesing prototypes
const arr = [5, 6, 5, 4, 5, 6];
//console.log(arr.__proto__);

//ES6 classes

//class expression
const PersonCL = class {};

//class decaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    //this will be in the prototype, this is OK with DRY
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
}

const jessica = new PersonCl('Jessica', 1996);
//console.log(jessica);
jessica.calcAge();

//console.log(jessica.__proto__ === PersonCl.prototype);
//console.log(jessica.age);

//object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

//inheritance between classes

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

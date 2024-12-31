// let myName = "hitesh        ";

// console.log(myName.truelength);

let myhero = ["thor", "bat"];

let power = {
  thor: "hammer",
  bat: "money",

  getBatpower: function () {
    console.log(`bat power is ${this.bat}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`hitesh says hello`);
};

// obj
// power.hitesh();
// power.heyHitesh();

// array
myhero.hitesh();
myhero.heyHitesh();

// inheritance
const User = {
  name: "chai",
  email: "chai@google.com",
};

const teacher = {
  makevideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "js assignemnt",
  fullTime: true,

  __proto__: teachingSupport,
};

teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher);

let anotherName = "sakibBhai       ";

String.prototype.trueLength = function () {
  //   console.log(`${this}`);
  console.log(`true length is ${this.trim().length}`);
};

anotherName.trueLength();
"iceTea        ".trueLength();
"GIFM        ".trueLength();

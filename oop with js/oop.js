const user = {
  username: "hitesh",
  loginCount: 1,
  signedIn: true,

  getUserDet: function () {
    // console.log('got user details');
    // console.log(`username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDet());

function User(username, loginCnt, isLoggedIn) {
  this.username = username;
  this.loginCnt = loginCnt;
  this.isLoggedIn = isLoggedIn;

  //   return this;
  this.getting = function () {
    console.log(`welcome ${this.username}`);
  };
}

const userOne = new User("Hitesh", 11, true);
const userTwo = new User("chai", 2, false);

console.log(userOne);
console.log(userOne.getting());
console.log(userTwo);
console.log(userTwo.constructor);

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    // return this._password.toUpperCase();
    return `${this._password}mySelf`;
  }

  set password(val) {
    this._password = val;
  }
}

const mineVar = new User("hite@gmil.com", "abs");

console.log(mineVar.password);

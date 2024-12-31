const promise1 = new Promise(function (resolve, reject) {
  // do an async task
  // db calls, crypto
  setTimeout(() => {
    console.log("async task is complete");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 resolved");
});

const prmise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log('');
    resolve({ username: "chai", email: "exmple@gmil.com" });
  }, 1000);
});

prmise3.then((user) => {
  console.log(user);
});

const prmise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log('');
    let error = false;
    if (!error) {
      resolve({ username: "chai", email: "exmple@gmil.com" });
    } else {
      reject("error: something went wrong");
    }
  }, 1000);
});

prmise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally the promise is resolved");
  });

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", pass: "123" });
    } else {
      reject("error: something went wrong");
    }
  }, 1000);
});

async function consumeProm5() {
  try {
    const res = await promise5;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

consumeProm5();

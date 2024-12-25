// Immediately Invoked function expressions(IIFE)

(function sakibDB() {
  // named iife
  console.log("db connected");
})();

(() => {
  // simple iife
  console.log("db connected with arrow iife");
})();

// ()()
// first parenthesis used for "function defination"
// second parenthesis used for "function execution"

// why used iife?
// some times we face difficulty in global scope pollution, so for reducing global scope pollution we use IIFE

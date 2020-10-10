

// Basic Algorithm Scripting: Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// The Problem
function booWho(bool) {
    return bool;
}
booWho(null);


// Problem Solved: One
function booWho(bool) {
    return typeof bool === "boolean";
}

let res = booWho(null);
console.log(res)

// Problem Solved: Two
function booWho(bool) {
    if (typeof bool === "boolean") {
      return true;
    } else {
      return false;
    }
}
let res = booWho(null);
console.log(res)
  
  
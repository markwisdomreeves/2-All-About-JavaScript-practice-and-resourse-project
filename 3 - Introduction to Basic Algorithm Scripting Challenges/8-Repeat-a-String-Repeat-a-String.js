

// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// Problem
function repeatStringNumTimes(str, num) {
    return str;
} 
repeatStringNumTimes("abc", 3);


// Problem Solved: One
// Recursive Solution
function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
let res1 = repeatStringNumTimes("abcdef", 3);
console.log(res1)


// Problem Solved: Two
// While Loop and Recursive approach
function repeatStringNumTimes(str, num) {
    if (num < 1) {
      return "";
    } else if (num === 1) {
      return str;
    } else {
      return str + repeatStringNumTimes(str, num - 1);
    }
}
let res2 = repeatStringNumTimes("abcdef", 3);
console.log(res2)


// Problem Solved: Three
// Use while Loop
function repeatStringNumTimes(str, num) {
    var accumulatedStr = "";
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
}
return accumulatedStr;
}

let res3 = repeatStringNumTimes("abcdef", 5);
console.log(res3)










// This approach (the in-built repeat method) might not be used in some cases
function repeatStringNumTimes(str, num) {
    return str.repeat(num)
}
let res = repeatStringNumTimes("abc", 3);
console.log(res)
  


// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Problem Explanation
// We need to reduce the length of the string or truncate it if it is longer than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.

// Problem
function truncateString(str, num) {
    return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
  
// Problem Solved: One
function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
}
let res1 = truncateString("A-tisket a-tasket A green and yellow basket what is it", 8);
  
console.log(res1)
  
// Problem Solved: Two
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}
let res2 = truncateString("A-tisket a-tasket A green and yellow basket what is it", 8);

console.log(res2)
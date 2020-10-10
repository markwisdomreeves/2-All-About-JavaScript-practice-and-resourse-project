

// Basic Algorithm Scripting: Reverse a String
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

// The Problem
function reverseString(str) {
    return str;
}
console.log(reverseString("hello"));
  
// Answer One: reverse() Method for Arrays
// When your interviewer didn’t specifically ask you to avoid using a built-in reverse() method, you should definitely take advantage of it. In JavaScript, the reverse() method exists only for arrays, so first we need to use split() to transform the string into an array. Then apply the reverse() method and finally join() it all back together:

function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("hello world"));


// Answer Two: with Spread Syntax (ES6) + reverse() Method for Arrays
// ES6 introduces one more way for splitting our string into an array, and that is a spread operator […]. Even though this solution is similar to the previous one, I believe it’s worth mentioning, because it looks and works pretty great.

function reverseString(str){
    return [...str].reverse().join('');
}
console.log(reverseString("God is very Great"));
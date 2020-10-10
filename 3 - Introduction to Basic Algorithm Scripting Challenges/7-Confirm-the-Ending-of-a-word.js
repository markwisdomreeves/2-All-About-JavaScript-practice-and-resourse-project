

// Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Definition and Usage
// The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.

// This method extracts the characters in a string between "start" and "end", not including "end" itself.

// If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1).

// If either "start" or "end" is less than 0, it is treated as if it were 0.

// Note: The substring() method does not change the original string.


// Problem
function confirmEnding(str, target) {
    return str.subString(target, );
}
confirmEnding("Bastian", "n");


// Problem Solved: One
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
confirmEnding("He has to give me a new name", "name");


// Problem Solved: Two
function confirmEnding(str, target) {
    return str.slice(-target.length) === target
}
confirmEnding("Bastian", "n");
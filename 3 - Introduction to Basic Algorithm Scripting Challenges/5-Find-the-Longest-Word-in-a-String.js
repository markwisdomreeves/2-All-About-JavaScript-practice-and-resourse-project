

// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// The Problem
function findLongestWordLength(str) {
    return str.length;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");


// Problem Solved: One
// Find the Longest Word With a FOR Loop
// For this solution, we will use the String.prototype.split() method

// The split() method splits a String object into an array of strings by separating the string into sub strings.
// We will need to add an empty space between the parenthesis of the split() method
function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}
let res = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(res)

// Problem Solved: Two
// Find the Longest Word With the sort() Method
// For this solution, we will use the Array.prototype.sort() method to sort the array by some ordering criterion and then return the length of the first element of this array.

// The sort() method sorts the elements of an array in place and returns the array.

function findLongestWord(str) {
    let longestWord = str.split(' ').sort(function(a, b) {
        return b.length - a.length;
    });
    return longestWord[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// Problem Solved: Three
// Find the Longest Word With the reduce() Method
// For this solution, we will use the Array.prototype.reduce().

// The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
// reduce() executes a callback function once for each element present in the array.

// You can provide an initial value as the second argument to reduce, here we will add an empty string “”.
// [].reduce(function(previousValue, currentValue) {...}, “”);

function findLongestWord(str) {
    let longestWordLength = str.split(' ').reduce(function(longestWord, currentWord) {
        return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, "");
    return longestWordLength.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
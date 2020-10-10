

// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// One of the most frequently used operations with strings is to convert the first character of a string to uppercase, and leave the rest of string as it is. There are many ways to capitalize the first letter of a string in JavaScript.

// The easiest way to do is to use two JavaScript functions together: charAt() and slice(). The former isolates and uppercases the first character from the left of the string, and the latter slices the string leaving the first character. The output of both methods is concatenated to form a capitalized string.


// The Problem
function titleCase(str) {
    return str;
}
titleCase("I'm a little tea pot");

// Problem Solved: One
// Capitalize Function
// You can even take one step further and create a function to transform the first character of the string to uppercase. Now just call the function whenever you want to capitalize a string.
const capitalize = (str) => {
    if(typeof str === 'string') {
        return str.replace(/^\w/, c => c.toUpperCase());
    } else {
        return '';
    }
};
let res = capitalize("I'm a little tea pot");
console.log(res)


function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
}
let res = titleCase("I'm a little tea pot");
console.log(res);


function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
let res = titleCase("I'm a little tea pot");
console.log(res);


// The above capitalize() function also checks the type of the passed parameter. If it is not a string, it returns an empty string.

// Capitalize All Words
// The best way to capitalize all words in a string is using regular expressions:
const phrase = "how to learn javascript";
const capitalStr = phrase.replace(/\b\w/g, function(c) {
    return c.toUpperCase();
});
console.log(capitalStr);

// ES6 implementation using arrow functions:
const phrase = "how to learn javascript";
const capitalStr = phrase.replace(/\b\w/g, c => c.toUpperCase());
console.log(capitalStr);


// Problem Solved: Three
// And if you feel comfortable working with regular expressions, you can also use replace() method:
const phrase = "how to learn javascript";
const capitalStr = phrase.replace(/^\w/, function(c) {
    return c.toUpperCase();
});
console.log(capitalStr);


// A bit modern ES6/ES2015 syntax using arrow functions:
const phrase = "how to learn javascript";
const capitalStr = phrase.replace(/^\w/, c => c.toUpperCase());
console.log(capitalStr)


// Problem Solved: Four
const phrase = "How to learn javascript a better way";
const capitalizeStr = phrase.charAt(0).toUpperCase() + phrase.slice(1);
console.log(capitalizeStr);

// Problem Solved: Five
// Iterate over each word
// After we run the above code, the variable words is assigned an array with each word from the sentence. The array is as follows ["freeCodeCamp", "is", "an", "awesome", "resource"].
const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

// Problem Solved: Six
// Other methods
// In programming, usually, there are multiple ways of solving the same problem. So let's see another approach.
const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");


  
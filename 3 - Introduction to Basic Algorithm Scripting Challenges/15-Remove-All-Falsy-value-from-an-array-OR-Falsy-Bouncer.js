

// Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

// Problem Explanation
// Remove all falsy 1.3k values from an array.


// Hints
// Hint 1
// Falsy is something which evaluates to FALSE. There are only six falsy values in JavaScript: undefined, null, NaN, 0, “” (empty string), and false of course.

// Hint 2
// We need to make sure we have all the falsy values to compare, we can know it, maybe with a function with all the falsy values…

// Hint 3
// Then we need to add a filter() with the falsy values function…

// Problem
function bouncer(arr) {
    return arr;
}
bouncer([7, "ate", "", false, 9]);


// Problem Solved: One
function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}
  
let res = bouncer([7, "ate", "", false, 9]);
console.log(res);
  
// Code Explanation
// We create a new empty array.
// We use a for cycle to iterate over all elements of the provided array (arr).
// We use the if statement to check if the current element is truthy 1.3k or falsy 1.3k.
// If the element is truthy, we push it to the new array (newArray). This result in the new array (newArray) containing only truthy elements.
// We return the new array (newArray).

// Problem Solved: Two - with the built-in Boolean method
function bouncer(arr) {
    return arr.filter(Boolean);
}
let res = bouncer([7, "ate", "", false, 9]);
console.log(res)

// Code Explanation
// The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy 1.3k value or false for falsy 1.3k value. Hence we pass the built-in Boolean function.


// Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

// Problem Explanation
// We need to return the element from an array that passes a function. Both the function and the array are passed into our function findElement(arr, func).

// Hints
// Hint 1
// We need to return the element from an array that passes a function. Both the function and the array are passed into our function findElement(arr, func). Looking through the array can be done with a for loop.

// Hint 2
// num is passed to the function. We will need to set it to the elements we want to check with the function.

// Hint 3
// Do not forget, if none of the numbers in the array pass the test, it should return undefined.


// The Problem
function findElement(arr, func) {
    let num = 0;
    return num;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

// The Problem Solved: One
function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }
    return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

// Code Explanation
// Challenge asks us to look through array. This is done using a for loop.
// The num variable is being passed into the function, so we set it to each index in our array.
// The pre-defined function already checks each number for us, so if it is “true”, we return that num.
// If none of the numbers in the array pass the function’s test, we return undefined.


// The Problem Solved: Two
function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

// Code Explanation
// Look through the array given in the 1st paramater “arr” using the .map() method
// Use the function in the 2nd parameter as the callback function in arr.map()
// Acquire the index of the first number that meets the condition in the function.
// Use that index to display the first available number that meets the condition.


// Problem Solved: Three
// Using the Array.prototype.find method
function findElement(arr, func) {
    return arr.find(func);
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

  
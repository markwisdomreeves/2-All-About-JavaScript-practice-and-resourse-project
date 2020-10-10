

// Basic Algorithm Scripting: Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// Problem Explanation
// This can be a tricky problem to understand. You need to find where in the array a number should be inserted by order, and return the index where it should go.

// Hint 1
// The first thing to do is sort the array from lower to bigger, just to make the code easier. This is where sort comes in, it needs a callback function so you have to create it.

// Hint 2
// Once the array is sorted, then just check for the first number that is bigger and return the index.

// Hint 3
// If there is no index for that number then you will have to deal with that case too.


// Problem
function getIndexToIns(arr, num) {
    return num;
}
getIndexToIns([40, 60], 50);


// Problem Solved: One
function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log(arr)
    for (var a = 0; a < arr.length; a++) {
      if (arr[a] >= num) return a;
    }
  
    return arr.length;
}
let res = getIndexToIns([40, 60], 50);
console.log(res)

// Code Explanation
// First I sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.
// Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index as an integer.


// Problem Solved: Two
function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log(arr)
    var i = 0;
    while (num > arr[i]) {
      i++;
    }
  
    return i;
}
let res = getIndexToIns([40, 60], 50);
console.log(res)
  
// Code Explanation
// Sort existing array.
// Iterate through the array while checking if num is bigger.
// The loop will stop when num isn’t bigger than i and return the last element checked.


// Problem Solved: Three
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log(arr)
    return arr.indexOf(num);
}
let res = getIndexToIns([40, 60], 50);
console.log(res)

// Code Explanation
// First we add the number num to the array using push() which adds it as the last element of the array.
// Then we use sort() with the callback function function(a, b){return a-b} to sort the numbers in ascending order.
// Lastly we return the postion or index of num in the array with the indexOf() function.



// Problem Solved: Four
function getIndexToIns(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
}
let res = getIndexToIns([1, 3, 4], 2);
console.log(res)

// Code Explanation
// We use method-chaining to invoke one method after another to solve the problem in a single line. First we merge arr and num by invoking the arr.concat(num) method
// Then we use sort() with the callback arrow function (a, b) => return a-b to sort the numbers in ascending order
// Lastly we return the postion or index of num in the array with the indexOf() method


// Problem Solved: Five
function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}
let res = getIndexToIns([40, 60], 50);
console.log(res)

// Code Explanation
// Similar to solution #2 but uses the filter method to achieve the same result
  
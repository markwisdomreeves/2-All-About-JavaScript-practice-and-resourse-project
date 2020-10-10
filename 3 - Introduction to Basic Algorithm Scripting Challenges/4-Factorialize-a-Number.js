

// Basic Algorithm Scripting: Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

// Provided test cases
// factorialize(0) should return 1
// factorialize(5) should return 120
// factorialize(10) should return 3628800
// factorialize(20) should return 2432902008176640000


// The Problem
function factorialize(num) {
    return num;
}
factorialize(5);
  

// Problem Solved: One
// There are three ways to factorialize a number in javascript
// The first way is to use Factorialize a Number With Recursion.
function factorialize(num) {
    if (num < 0) {
        return -1;
    } else if (num === 0) {
        return 1;
    } else {
        return (num * factorialize(num - 1));
    }
}
factorialize(5);


// Problem Solved: Two
// Factorialize a Number with a WHILE loop
function factorialize(num) {
    let result = num;
    if (num === 0 || num === 1) {
        return 1;
    }
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}
factorialize(5);


// Problem Solved: Three
// Factorialize a Number with a FOR loop
function factorialize(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
factorialize(5);




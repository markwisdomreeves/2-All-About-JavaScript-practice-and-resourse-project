
/* 
 Basic JavaScript: Modify Array Data With Indexes
Unlike strings, the entries of arrays are mutable and can be changed freely.

Example

var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]
Note
There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

Modify the data stored at index 0 of myArray to a value of 45.
*/


// Setup
var myArray = [18,64,99];

// Only change code below this line
myArray[0] = 45;
console.log(myArray)

myArray[1] = 100;
console.log(myArray)





// Basic JavaScript: Multiple Identical Options in Switch Statements
// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

switch(val) {
    case 1:
    case 2:
    case 3:
      result = "1, 2, or 3";
      break;
    case 4:
      result = "4 alone";
}

// Cases for 1, 2, and 3 will all produce the same result.


// Write a switch statement to set answer for the following ranges:
// 1-3 - "Low"
// 4-6 - "Mid"
// 7-9 - "High"

// Note
// You will need to have a case statement for each number in the range.
function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch(val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        console.log(answer);
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        console.log(answer);
        break;
      case 7:
      case 8:
      case 9:
        console.log(answer);
        answer = "High";
        break;
  
      default:
         answer = "This range do not exist";
         console.log(answer);
         break;
  }
  
    // Only change code above this line
    return answer;
  }
  
sequentialSizes(1);
  
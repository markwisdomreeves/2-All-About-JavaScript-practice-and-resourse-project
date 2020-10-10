


// Basic JavaScript: Introducing Else If Statements
// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

// Example
if (num > 15) {
    return "Bigger than 15";
} else if (num < 5) {
    return "Smaller than 5";
} else {
    return "Between 5 and 15";
}


// Convert the logic to use else if statements.

function testElseIf(val) {
    var result = "";
    if (val > 10) {
      result = "Greater than 10";
    }
    else if (val < 5) {
      result = "Smaller than 5";
    }
    else {
      result = "Between 5 and 10";
    }
    console.log(result);
    return result;
  }
  
testElseIf(7);
  
  
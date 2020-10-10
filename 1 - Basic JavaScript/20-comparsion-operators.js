


// Basic JavaScript: Comparisons with the Logical Or Operator
// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

// The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

// The pattern below should look familiar from prior waypoints:

if (num > 10) {
    return "No";
  }
  if (num < 5) {
    return "No";
  }
return "Yes";


// will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
    return "No";
  }
return "Yes";

// Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".

function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      console.log(val)
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
testLogicalOr(15);



// Basic JavaScript: Introducing Else Statements
// When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

if (num > 10) {
    return "Bigger than 10";
  } else {
    return "10 or Less";
}


// Combine the if statements into a single if/else statement.
function testElse(val) {
    var result = "";
    // Only change code below this line
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
testElse(4);
  
  





  
  
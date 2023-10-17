function isPositive(a) {
  if (a > 0) {
    return true;
  } else {
    return false;
  }
}

function isNegative(a) {
  if (a < 0) {
    return true;
  } else {
    return false;
  }
}

function isNull(a) {
  if (a === 0) {
    return true;
  } else {
    return false;
  }
}

function checkNumber(a) {
  if (isPositive(a) === true) {
    console.log("a is positive");
  } else if (isNegative(a) === true) {
    console.log("a is negative");
  } else {
    console.log("a is null");
  }
}

console.log(isPositive(3)); // true
console.log(isPositive(-3)); // false
console.log(isPositive(0)); // false

var a = 3;
var b = 0;
function divideTwoNumbers(a, b) {
  if (b !== 0) {
    console.log("Rezultatul impartirii este: ", a / b);
  } else {
    console.log("Error: Division by zero");
  }
}

divideTwoNumbers(2, 0);
divideTwoNumbers(2, 2);
divideTwoNumbers(-3, 1.5);

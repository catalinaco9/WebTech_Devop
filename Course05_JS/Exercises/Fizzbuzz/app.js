//Given an integer n, for every integer i <= n, the task is to print "FizzBuzz" if i is divisible by 3 and 5,
//"Fizz" if i is divisible by 3, "Buzz" if i is divisible by 5, otherwise print i.

//Examples:
// input: n = 3
// output: [1 2 Fizz]
var firstNumberInput = document.getElementById("first-number");
var secondNumberInput = document.getElementById("second-number");
var outputParagraph = document.getElementById("output");

// function getElementById(id) {
//   return Number(document.getElementById(id).value);
// }

// console.log(firstNumberInput, secondNumberInput); //afiseaza html-ul din input

function fizzBuzz() {
  outputParagraph.innerHtml = "";
  var m = Number(firstNumberInput.value);
  var n = Number(secondNumberInput.value);

  for (var i = m; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      outputParagraph.innerHTML +=
        '<div class="box fizz-buzz">' + i + "</div>" + " ";
    } else if (i % 3 == 0) {
      outputParagraph.innerHTML +=
        '<div class="box fizz">' + i + "</div>" + " ";
    } else if (i % 5 == 0) {
      outputParagraph.innerHTML +=
        '<div class="box buzz">' + i + "</div>" + " ";
    } else {
      outputParagraph.innerHTML += '<div class="box ">' + i + "</div>" + " ";
    }
  }
}

function fizzBuzzV1() {
  outputParagraph.innerHtml = "";
  var m = Number(firstNumberInput.value);
  var n = Number(secondNumberInput.value);

  for (var i = m; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      outputParagraph.innerHTML += "FizzBuzz" + " ";
    } else if (i % 3 == 0) {
      outputParagraph.innerHTML += "Fizz" + " ";
    } else if (i % 5 == 0) {
      outputParagraph.innerHTML += "Buzz" + " ";
    } else {
      outputParagraph.innerHTML += i;
    }
  }
}

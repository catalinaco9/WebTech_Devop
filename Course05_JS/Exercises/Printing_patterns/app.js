var numberInput = document.getElementById("number");
var outputParagraph = document.getElementById("output");
//pe linie repetam printarea unei stelute, ier pe o coloana, printarea unei linii
function squareFillPattern() {
  var n = Number(numberInput.value);
  var output = "";

  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      output += '<div class="circle orange"></div>';
    }
    output += "<br>";
  }
  outputParagraph.innerHTML = output;
}

function squareHollowPattern() {
  var n = Number(numberInput.value);
  var output = "";

  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      if (i === 1 || j === 1 || i === n || j === n) {
        output += '<div class="circle orange"></div>';
      } else {
        output += '<div class="circle transparent"></div>';
      }
    }
    output += "<br>";
  }
  outputParagraph.innerHTML = output;
}

function rightHalfPiramid() {
  var n = Number(numberInput.value);
  var output = "";

  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      output += '<div class="circle red"></div>';
    }
    output += "<br>";
  }
  outputParagraph.innerHTML = output;
}

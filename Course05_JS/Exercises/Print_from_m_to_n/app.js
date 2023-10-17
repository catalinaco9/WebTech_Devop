var primulNumberInput = document.getElementById("primul_number");
var secondNumberInput = document.getElementById("second_number");

var outputParagraph = document.getElementById("output");

function printFromMToN() {
  outputParagraph.innerHTML = " ";
  var m = Number(primulNumberInput.value);
  var n = Number(secondNumberInput.value);
  // var i = m;

  if (n < m) {
    i = n;
    n = m;
    m = i;
  }

  // while (i <= n) {
  //   outputParagraph.innerHTML += `<br>` + i + `<br>`;
  //   i++;
  // }

  for (var i = m; i <= n; i++) {
    outputParagraph.innerHTML += `<br>` + i + `<br>`;
  }
}

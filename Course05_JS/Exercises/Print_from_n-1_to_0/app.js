var numberInput = document.getElementById("number");
var outputParagraph = document.getElementById("output");

function printFrom1ToNminusUsingFor() {
  outputParagraph.innerHTML = " ";
  var n = Number(numberInput.value);
  // var i = n - 1;

  // while (i >= 0) {
  //   outputParagraph.innerHTML += `<br>` + i + `<br>`;
  //   i--;
  // }

  for (var i = n - 1; i >= 0; i--) {
    outputParagraph.innerHTML += `<br>` + i + `<br>`;
  }
}

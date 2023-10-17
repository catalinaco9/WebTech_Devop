var numberInput = document.getElementById("number");
var outputParagraph = document.getElementById("output");

function printFrom1ToNUsingFor() {
  // var i = 1;
  var number = Number(numberInput.value);

  // while (i <= number) {
  //   outputParagraph.innerHTML += `<br>` + i + `<br>`;
  //   i++;
  // }

  for (var i = 1; i <= number; i++) {
    outputParagraph.innerHTML += `<br>` + i + `<br>`;
  }
}

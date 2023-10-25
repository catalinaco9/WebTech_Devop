// we are going to stop when j<i and i=j (for drawing, check ACE agenda)

var strInput = document.getElementById("string");
var outputParagraph = document.getElementById("output");

function checkPalindrome() {
  var str = strInput.value;
  var i = 0;
  var j = str.length - 1;

  //noi cautam sa nu fie palindrom pentru ca e mai usor de gasit
  while (i < j) {
    if (str[i] !== str[j]) {
      outputParagraph.innerHTML = str + " nu este palindrom";
      return;
    }
    i++;
    j--;
    outputParagraph.innerHTML = str + " este palindrom";
  }
}

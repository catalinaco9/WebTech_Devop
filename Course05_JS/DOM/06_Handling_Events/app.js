var inputElement = document.getElementById("myInput");
var paragraphElemet = document.getElementById("myParagraph");

inputElement.addEventListener("input", onInput);

//trebuie sa asociem functia cu aparitia unui eveniment
//event.data->printeaza ceea ce este scris in consola(litera cu litera)
//event.target->printeaza input
//value se schimba cand se scrie ceva in input
//event.target.value->printeaza ceea ce este scris in input
function onInput(event) {
  paragraphElemet.innerHTML = event.target.value;
}

var inputColor = document.getElementById("input-color");
var divColor = document.getElementById("myDiv");

inputColor.addEventListener("input", changeDivColor);

function changeDivColor(e) {
  console.log(e.target.value);
  divColor.style.backgroundColor = e.target.value;
  //document.body.style.backgroundColor = e.target.value;
}

console.log(randomColor);

// function setRandomColorToBody() {
//   var randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomColor;
// }

// setTimeout(() => {
//   setRandomColorToBody();
// }, 1000);

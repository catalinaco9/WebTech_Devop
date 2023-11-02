var input = document.getElementById("produs");
var addItemButton = document.getElementById("addButton");
var productListElement = document.getElementById("myList");

addItemButton.addEventListener("click", addItem);

function addItem() {
  var inputValue = input.value;
  console.log(inputValue);

  var productListItem = document.createElement("li");

  productListItem.innerHTML = inputValue;
  console.log(productListItem);
  productListElement.appendChild(productListItem);
}

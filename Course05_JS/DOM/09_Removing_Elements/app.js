var list = document.getElementById("myList");
list.style.backgroundColor = "lightblue";
var removeButton = document.getElementById("removeButton");

removeButton.addEventListener("click", removeListItem);

function removeListItem() {
  var item1 = document.querySelector("#myList li:first-child");
  item1.remove();
}

var removeAllButton = document.getElementById("removeAllButton");
removeAllButton.addEventListener("click", removeAllItems);

//cand vrem sa stergem ceva din lista, NU stergem si lista, ci doar elementele din ea
function removeAllItems() {
  var items = document.querySelectorAll("#myList li");
  for (var i = 0; i <= items.length - 1; i++) {
    items[i].remove();
    console.log(items[i]);
  }
}

//se numeste event bubbleing -> daca are copii, se va activa cel mai de jos (cel mai mic copil)
list.addEventListener("click", handleClick);

function handleClick(e) {
  //ne folosim de clasa
  //e.target ->eveniemntul pe care s-a dat click
  //classList.contains -> se verifica elementul care are clasa= "delete-item"
  if (e.target.classList.contains("delete-item")) {
    console.log("S-a apasat delete");
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("item")) {
    e.target.classList.toggle("view");
  }
}

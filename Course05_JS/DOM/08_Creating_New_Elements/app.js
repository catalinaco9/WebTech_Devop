var container = document.getElementById("myContainer");
var toDoList = document.createElement("ul");

//add an id for the ul
// toDoList.id = "todo-list";

// var toDoItem = document.createElement("li");
// toDoItem.innerHTML = "Learning";

// toDoList.appendChild(toDoItem);
// container.appendChild(toDoList);

container.innerHTML = `<ul id="toDo-list">
        <li>Learning</li>
        <li>Sleeping </li>
    </ul>`;

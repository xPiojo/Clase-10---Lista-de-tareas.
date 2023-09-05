const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", addTask);
taskList.addEventListener("dblclick", deleteTask);
taskList.addEventListener("click", completeTask);
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const inputValue = taskInput.value.trim();
  const newTarea = document.createElement("li");
  if (inputValue !== "") {
    taskList.append(newTarea);
    newTarea.textContent = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    //Agrego la tarea con su primera letra en mayuscula
    taskInput.value = "";
  } else {
    alert("No ingresaste ninguna tarea");
  }
}

function deleteTask(element) {
  if (confirm("Desea eliminar la tarea")) {
    element.target.remove();
  }
}

function completeTask(element) {
  element.target.classList.toggle("completeTask");
}

/*
function addTask() {
  const inputValue = taskInput.value.trim();
  const newTarea = document.createElement("li");
  if (inputValue !== "") {
    taskList.append(newTarea);
    newTarea.textContent = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    newTarea.addEventListener("click", function () {
      newTarea.remove();
    });
    taskInput.value = "";
  } else {
    alert("No ingresaste ninguna tarea");
  }
}
*/

//Echo en clase
/*
function addTask() {
  let inputValue = taskInput.value;
  const newTarea = document.createElement("li");
  if (inputValue.trim().length > 0) {
    taskList.append(newTarea);
    newTarea.textContent = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    taskInput.value = "";
  } else {
    alert("No ingresaste ninguna tarea");
  }
}
*/

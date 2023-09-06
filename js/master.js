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

// Funcion para agregar tarea
function addTask() {
  const inputValue = taskInput.value.trim();
  const newTarea = document.createElement("li");
  if (inputValue !== "") {
    taskList.append(newTarea);
    newTarea.textContent = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    //Agrega la tarea con su primera letra en mayuscula
    taskInput.value = "";
  } else {
    alert("No ingresaste ninguna tarea");
  }
}

// Función para borrar tarea
function deleteTask(element) {
  const target = element.target;
  if (target.tagName == "LI") {
    if (confirm("Desea eliminar la tarea")) {
      element.target.remove();
    }
  }
}

// Función para Completar tarea
function completeTask(element) {
  const target = element.target;
  if (target.tagName == "LI") {
    element.target.classList.toggle("completeTask");
  }
}

// Función para filtrar por busqueda
const inputFilter = document.getElementById("search-Filter");
inputFilter.addEventListener("keyup", filterTasks);

function filterTasks() {
  const taskItems = document.querySelectorAll("#taskList li");
  const filterText = inputFilter.value.toLowerCase();

  taskItems.forEach((taskItem) => {
    const taskText = taskItem.textContent.toLowerCase();
    if (taskText.includes(filterText)) {
      taskItem.classList.remove("hidden");
    } else {
      taskItem.classList.add("hidden");
    }
  });
}

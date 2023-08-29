// Variables_
const taskList = document.getElementById("task-list");
const total = document.getElementById("total");
const checked = document.getElementById("realizadas");
const input = document.getElementById("input");
const btnAddTask = document.getElementById("btn-add-task");

let tasks = [
    { id: 1, task: "Grabar Voces", state: true },
    { id: 2, task: "Mezcla de Voces", state: false },
    { id: 3, task: "Mezcla de Instrumentos", state: true },
];


// Functions_
function renderElements() {
    let html = "";
    tasks.forEach((task) => {
        const { id, task: t, state } = task; 
        html += `
        <tr> 
         <td>${id}</td>
         <td>${t}</td>
         <td> 
          <input type='checkbox' 
          onclick="completeTask(${id})"
          id='checkbox-${id}' ${state ? "checked" : ""}>
         </td>
         <td>
          <button onclick="deleteTask(${id})">❌</button>
         </td>
        </tr>
        `;
    }); 
    
taskList.innerHTML = html;
total.innerHTML = tasks.length;
checked.innerHTML = tasks.filter((task) => task.state).length;
}




//Delete Task_

function deleteTask(id) {
    const newTask = tasks.filter((task)=> task.id !== id);
    tasks = newTask; 
    renderElements();
}


//Check_

function actualizarContador() {
    const checkedCount = tasks.filter((tarea) => tarea.state).length;
    checked.textContent = checkedCount;
}

function completeTask(id) {
    const checkbox = document.getElementById(`checkbox-${id}`);
    tasks.forEach((task) => {
        if (task.id == id) {
            task.state = checkbox.checked;
        }
    });
    
    actualizarContador(); 
    renderElements();
}



//Add Task_
function addTask () {
    if(input.value.trim() === "") return alert("Ingresa una tarea");
    const newTask = { id: tasks.length + 1, task: input.value, state: false };
    tasks.push(newTask);
    input.value = "";
    renderElements();
}


// Render_
renderElements();
 
// Events_
btnAddTask.addEventListener("click", addTask);
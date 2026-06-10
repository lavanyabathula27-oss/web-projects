const addTaskBtn =document.getElementById("addBtn");
const input =document.getElementById("inputTask");
const taskList =document.getElementById("taskList");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");

addTaskBtn.addEventListener("click", addTask);
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});


function updateCounts() {
    const totalTasks = taskList.children.length;
    totalCount.textContent = totalTasks;
    const checkboxes = taskList.querySelectorAll("input[type='checkbox']");
    let completed = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            completed++;
        }
    });
    completedCount.textContent = completed;
}



function addTask (){

let taskText = input.value.trim();
if (taskText == "" ){
    alert("Please enter a Task.");
    return;
}

let listElement = document.createElement("li");
taskList.append(listElement);
input.value = "";


const checkbox = document.createElement("input");
checkbox.type = "checkbox";

 listElement.prepend(checkbox);

 const taskSpan =document.createElement("span");
 taskSpan.textContent = taskText;
 listElement.append(taskSpan);


 const deleteBtn = document.createElement("button");
 deleteBtn.classList.add("deleteBtn");
 deleteBtn.innerText= "x";
 listElement.append(deleteBtn);


checkbox.addEventListener("change",() =>{
    if (checkbox.checked){
        taskSpan.classList.add("completed");
    } else {
        taskSpan.classList.remove("completed");
    }
    updateCounts();
});


deleteBtn.addEventListener("click", () =>{
listElement.remove();
updateCounts();


});
updateCounts();

}






const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";
  delBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}

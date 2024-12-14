const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Completed</button>
  `;

  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.style.animation = "fadeOut 0.5s forwards";
    setTimeout(() => li.remove(), 500);
  });

  li.style.animation = "fadeIn 0.5s";
  todoList.appendChild(li);

  input.value = "";
}

addButton.addEventListener("click", addTask);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

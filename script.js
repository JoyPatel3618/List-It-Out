// Select elements
const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// Function to add a task
function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Completed</button>
  `;

  // Add delete functionality
  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.style.animation = "fadeOut 0.5s forwards";
    setTimeout(() => li.remove(), 500);
  });

  // Add animation and append to list
  li.style.animation = "fadeIn 0.5s";
  todoList.appendChild(li);

  // Clear input
  input.value = "";
}

// Event listeners
addButton.addEventListener("click", addTask);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

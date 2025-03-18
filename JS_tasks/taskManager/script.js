class TaskManager {
  constructor() {
    this.tasks = this.loadTasks();
    this.renderTasks();
  }
  addTask(description, priority, status) {
    const task = {
      id: Date.now(),
      description,
      priority,
      status,
    };
    this.tasks.push(task);
    this.saveTasks();
    this.renderTasks();
  }
  loadTasks() {
    try {
      const tasks = localStorage.getItem("tasks");
      // Перевірка, чи це масив
      const parsedTasks = tasks ? JSON.parse(tasks) : [];
      return Array.isArray(parsedTasks) ? parsedTasks : [];
    } catch (e) {
      console.error("Помилка при завантаженні задач з localStorage:", e);
      return [];
    }
  }

  saveTasks() {
    try {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    } catch (e) {
      console.error("Помилка при збереженні задач в localStorage:", e);
    }
  }
  renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // Очищення списку перед оновленням

    this.tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.classList.add("task-item", task.priority);
      li.innerHTML = `
         <div class="task-container">
         ${index + 1}. 
    <strong>${task.description}</strong>
    <span>Пріоритет: <strong> ${task.priority}</strong> | Статус: <strong>${
        task.status
      }</strong></span>
    <button class="delete-btn">
      <img src="assets/img/trash.png" alt="Delete" class="trash-icon">
    </button>
  </div>
      `;
      li.querySelector(".delete-btn").addEventListener("click", () => {
        this.deleteTask(task.id);
      });
      taskList.appendChild(li);
    });
  }
  sortByStatus() {
    this.tasks.sort((a, b) => {
      if (a.status < b.status) return -1;
      if (a.status > b.status) return 1;
      return 0;
    });
    this.renderTasks();
  }
  sortByPriority() {
    const priorityOrder = {
      high: 3,
      medium: 2,
      low: 1,
    };

    this.tasks.sort((a, b) => {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    this.renderTasks();
  }
  deleteTask(id) {
    if (confirm("Ви точно хочете видалити це завдання?")) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      this.saveTasks();
      this.renderTasks();
    }
  }
  deleteAllTasks() {
    if (confirm("Ви точно хочете видалити всі завдання?")) {
      this.tasks = [];
      this.saveTasks();
      this.renderTasks();
    }
  }
}

const taskManager = new TaskManager();
// taskManager.addTask("finish project", "high", "pending");
// console.log(taskManager.tasks);
const btnAddTask = document.getElementById("btn-add-task");
const sortTasks = document.getElementById("sort-btn");
const btnDeleteAll = document.getElementById("btn-clear-all");

sortTasks.addEventListener("click", (e) => {
  const sortBy = document.getElementById("sortBy").value;
  e.preventDefault();
  if (sortBy === "status") {
    taskManager.sortByStatus();
  } else if (sortBy === "priority") {
    taskManager.sortByPriority();
  }
});

btnAddTask.addEventListener("click", (e) => {
  const description = document.getElementById("task-input").value;
  const priority = document.getElementById("priority").value;
  const status = document.getElementById("status").value;
  e.preventDefault();
  if (description.trim()) {
    taskManager.addTask(description, priority, status);
    document.getElementById("task-input").value = "";
  } else {
    alert("Введіть завдання!");
  }
});
btnDeleteAll.addEventListener("click", (e) => {
  e.preventDefault();
  taskManager.deleteAllTasks();
});

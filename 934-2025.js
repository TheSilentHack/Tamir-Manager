      let editingTask = null;
  
      document.addEventListener("DOMContentLoaded", loadTasks);
  
      function goToHome() {
        window.location.href = "index.html"; // Remplacez "index.html" par l'URL de votre page d'accueil
      }

      function addTask() {
        const taskName = document.getElementById('task-name').value;
        const taskDate = document.getElementById('task-date').value;
        const taskTime = document.getElementById('task-time').value;
        const taskPriority = document.getElementById('task-priority').value;
  
        if (!taskName || !taskDate || !taskTime) {
          alert("Veuillez remplir tous les champs !");
          return;
        }
  
        const task = { name: taskName, date: taskDate, time: taskTime, priority: taskPriority };
  
        if (editingTask) {
          updateTask(task);
        } else {
          saveTask(task);
          displayTask(task);
        }
  
        document.getElementById('task-name').value = "";
        document.getElementById('task-date').value = "";
        document.getElementById('task-time').value = "";
        document.getElementById('task-priority').value = "low";
        editingTask = null;
      }
  
      function displayTask(task) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item', task.priority);
  
        const taskContent = document.createElement('div');
        taskContent.innerHTML = `<strong>${task.name}</strong><br>Date: ${task.date} <br> Heure: ${task.time}`;
  
        const editButton = document.createElement('button');
        editButton.textContent = "Modifier";
        editButton.onclick = function () {
          editTask(task, taskItem);
        };
  
        const saveButton = document.createElement('button');
        saveButton.textContent = "Sauvegarder";
        saveButton.style.display = "none";
        saveButton.onclick = function () {
          saveButton.style.display = "none";
          editButton.style.display = "block";
          addTask();
        };
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Supprimer";
        deleteButton.onclick = function () {
          taskItem.remove();
          removeTask(task);
        };
  
        taskItem.appendChild(taskContent);
        taskItem.appendChild(editButton);
        taskItem.appendChild(saveButton);
        taskItem.appendChild(deleteButton);
        document.getElementById('task-list').appendChild(taskItem);
      }
  
      function editTask(task, taskItem) {
        document.getElementById('task-name').value = task.name;
        document.getElementById('task-date').value = task.date;
        document.getElementById('task-time').value = task.time;
        document.getElementById('task-priority').value = task.priority;
  
        editingTask = task;
        
        const editButton = taskItem.querySelector("button:nth-child(2)");
        const saveButton = taskItem.querySelector("button:nth-child(3)");
        
        editButton.style.display = "none";
        saveButton.style.display = "block";
      }
  
      function saveTask(task) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
  
      function updateTask(task) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.map(t => (t.name === editingTask.name ? task : t));
        localStorage.setItem("tasks", JSON.stringify(tasks));
        location.reload();
      }
  
      function removeTask(task) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(t => t.name !== task.name);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
  
      function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(displayTask);
      }

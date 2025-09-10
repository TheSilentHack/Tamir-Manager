let editingTask = null;
document.addEventListener("DOMContentLoaded", loadTasks);
function goToAgenda() {
  window.location.href = "934-2025.html";
}
function addTask() {
  const _0x3afb59 = document.getElementById('task-name').value;
  const _0x35bd42 = document.getElementById("task-date").value;
  const _0x1e3474 = document.getElementById("task-time").value;
  const _0x4c4a1d = document.getElementById('task-priority').value;
  if (!_0x3afb59 || !_0x35bd42 || !_0x1e3474) {
    alert("Veuillez remplir tous les champs !");
    return;
  }
  const _0x3a0a10 = {
    'name': _0x3afb59,
    'date': _0x35bd42,
    'time': _0x1e3474,
    'priority': _0x4c4a1d
  };
  if (editingTask) {
    updateTask(_0x3a0a10);
  } else {
    saveTask(_0x3a0a10);
    displayTask(_0x3a0a10);
  }
  document.getElementById('task-name').value = '';
  document.getElementById("task-date").value = '';
  document.getElementById("task-time").value = '';
  document.getElementById("task-priority").value = "low";
  editingTask = null;
}
function displayTask(_0x2e7660) {
  const _0x3249d9 = document.createElement("div");
  _0x3249d9.classList.add("task-item", _0x2e7660.priority);
  const _0x1b9012 = document.createElement("div");
  _0x1b9012.innerHTML = '<strong>' + _0x2e7660.name + "</strong><br>Date: " + _0x2e7660.date + " <br> Heure: " + _0x2e7660.time;
  const _0x5679cf = document.createElement("button");
  _0x5679cf.textContent = 'Modifier';
  _0x5679cf.onclick = function () {
    editTask(_0x2e7660, _0x3249d9);
  };
  const _0x576137 = document.createElement('button');
  _0x576137.textContent = "Sauvegarder";
  _0x576137.style.display = "none";
  _0x576137.onclick = function () {
    _0x576137.style.display = "none";
    _0x5679cf.style.display = "block";
    addTask();
  };
  const _0x1a50c9 = document.createElement("button");
  _0x1a50c9.textContent = 'Supprimer';
  _0x1a50c9.onclick = function () {
    _0x3249d9.remove();
    removeTask(_0x2e7660);
  };
  _0x3249d9.appendChild(_0x1b9012);
  _0x3249d9.appendChild(_0x5679cf);
  _0x3249d9.appendChild(_0x576137);
  _0x3249d9.appendChild(_0x1a50c9);
  document.getElementById("task-list").appendChild(_0x3249d9);
}
function editTask(_0x3972b6, _0x1a5ff9) {
  document.getElementById("task-name").value = _0x3972b6.name;
  document.getElementById('task-date').value = _0x3972b6.date;
  document.getElementById("task-time").value = _0x3972b6.time;
  document.getElementById("task-priority").value = _0x3972b6.priority;
  editingTask = _0x3972b6;
  const _0x293f7a = _0x1a5ff9.querySelector("button:nth-child(2)");
  const _0x3b919c = _0x1a5ff9.querySelector("button:nth-child(3)");
  _0x293f7a.style.display = "none";
  _0x3b919c.style.display = "block";
}
function saveTask(_0x3c0851) {
  let _0x8546d7 = JSON.parse(localStorage.getItem("tasks")) || [];
  _0x8546d7.push(_0x3c0851);
  localStorage.setItem("tasks", JSON.stringify(_0x8546d7));
}
function updateTask(_0x46656e) {
  let _0x47eae8 = JSON.parse(localStorage.getItem("tasks")) || [];
  _0x47eae8 = _0x47eae8.map(_0x431081 => _0x431081.name === editingTask.name ? _0x46656e : _0x431081);
  localStorage.setItem("tasks", JSON.stringify(_0x47eae8));
  location.reload();
}
function removeTask(_0x1590c4) {
  let _0x5b1b25 = JSON.parse(localStorage.getItem('tasks')) || [];
  _0x5b1b25 = _0x5b1b25.filter(_0x508af3 => _0x508af3.name !== _0x1590c4.name);
  localStorage.setItem("tasks", JSON.stringify(_0x5b1b25));
}
function loadTasks() {
  let _0x285d57 = JSON.parse(localStorage.getItem("tasks")) || [];
  _0x285d57.forEach(displayTask);
}

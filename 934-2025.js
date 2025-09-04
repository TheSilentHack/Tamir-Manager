let editingTask = null;
document.addEventListener('DOMContentLoaded', loadTasks);
function goToHome() {
  window.location.href = "index.html";
}
function addTask() {
  const _0x13b49a = document.getElementById("task-name").value;
  const _0x4b3219 = document.getElementById("task-date").value;
  const _0x29d411 = document.getElementById('task-time').value;
  const _0x31cb49 = document.getElementById('task-priority').value;
  if (!_0x13b49a || !_0x4b3219 || !_0x29d411) {
    alert("Veuillez remplir tous les champs !");
    return;
  }
  const _0x176500 = {
    'name': _0x13b49a,
    'date': _0x4b3219,
    'time': _0x29d411,
    'priority': _0x31cb49
  };
  if (editingTask) {
    updateTask(_0x176500);
  } else {
    saveTask(_0x176500);
    displayTask(_0x176500);
  }
  document.getElementById("task-name").value = '';
  document.getElementById('task-date').value = '';
  document.getElementById("task-time").value = '';
  document.getElementById('task-priority').value = 'low';
  editingTask = null;
}
function displayTask(_0x5a54fa) {
  const _0x5acb11 = document.createElement("div");
  _0x5acb11.classList.add("task-item", _0x5a54fa.priority);
  const _0x328840 = document.createElement("div");
  _0x328840.innerHTML = "<strong>" + _0x5a54fa.name + "</strong><br>Date: " + _0x5a54fa.date + " <br> Heure: " + _0x5a54fa.time;
  const _0x1c0154 = document.createElement("button");
  _0x1c0154.textContent = 'Modifier';
  _0x1c0154.onclick = function () {
    editTask(_0x5a54fa, _0x5acb11);
  };
  const _0x442ad7 = document.createElement("button");
  _0x442ad7.textContent = "Sauvegarder";
  _0x442ad7.style.display = 'none';
  _0x442ad7.onclick = function () {
    _0x442ad7.style.display = "none";
    _0x1c0154.style.display = "block";
    addTask();
  };
  const _0x4f8937 = document.createElement("button");
  _0x4f8937.textContent = "Supprimer";
  _0x4f8937.onclick = function () {
    _0x5acb11.remove();
    removeTask(_0x5a54fa);
  };
  _0x5acb11.appendChild(_0x328840);
  _0x5acb11.appendChild(_0x1c0154);
  _0x5acb11.appendChild(_0x442ad7);
  _0x5acb11.appendChild(_0x4f8937);
  document.getElementById("task-list").appendChild(_0x5acb11);
}
function editTask(_0x17a2ed, _0xaa9f8) {
  document.getElementById("task-name").value = _0x17a2ed.name;
  document.getElementById("task-date").value = _0x17a2ed.date;
  document.getElementById("task-time").value = _0x17a2ed.time;
  document.getElementById("task-priority").value = _0x17a2ed.priority;
  editingTask = _0x17a2ed;
  const _0x17612a = _0xaa9f8.querySelector("button:nth-child(2)");
  const _0x21f7e9 = _0xaa9f8.querySelector('button:nth-child(3)');
  _0x17612a.style.display = "none";
  _0x21f7e9.style.display = "block";
}
function saveTask(_0x24a364) {
  let _0x8a8ed3 = JSON.parse(localStorage.getItem('tasks')) || [];
  _0x8a8ed3.push(_0x24a364);
  localStorage.setItem('tasks', JSON.stringify(_0x8a8ed3));
}
function updateTask(_0x1982ed) {
  let _0x120d3d = JSON.parse(localStorage.getItem("tasks")) || [];
  _0x120d3d = _0x120d3d.map(_0x39419c => _0x39419c.name === editingTask.name ? _0x1982ed : _0x39419c);
  localStorage.setItem("tasks", JSON.stringify(_0x120d3d));
  location.reload();
}
function removeTask(_0x45de3a) {
  let _0x38fbde = JSON.parse(localStorage.getItem('tasks')) || [];
  _0x38fbde = _0x38fbde.filter(_0x1728d4 => _0x1728d4.name !== _0x45de3a.name);
  localStorage.setItem("tasks", JSON.stringify(_0x38fbde));
}
function loadTasks() {
  let _0x423fff = JSON.parse(localStorage.getItem("tasks")) || [];
  _0x423fff.forEach(displayTask);
}

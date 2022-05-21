/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const projects = [];

// Defaukt Tasks
const task1 = new ToDo('Workout', 'Do it at the gym', 'Tomorrow', 'important');
const task2 = new ToDo('Sleeep', 'At home', 'Tonight', 'urgent');
const task3 = new ToDo('Interview', 'At PC', 'Tueesday', 'important');
projects.push(task1, task2, task3);

const btn = document.getElementById('taskBtn');
const projectList = document.getElementById('projectList');
const mainForm = document.getElementById('mainForm');

function makeTask(title, description, dueDate, priority) {
  const task = new ToDo(title, description, dueDate, priority);
  projects.push(task);
}

function showForm() {
  mainForm.classList.remove('hidden');
}

function hideForm() {
  mainForm.classList.add('hidden');
}

function updateList() {
  projectList.innerHTML = '';
  for (const element of projects) {
    const task = document.createElement('div');
    const title = document.createElement('h3');
    const description = document.createElement('h3');
    const dueDate = document.createElement('h3');
    const priority = document.createElement('h3');

    const bre = document.createElement('br');

    title.textContent = `${element.title}`;
    description.textContent = `${element.description}`;
    dueDate.textContent = `${element.dueDate}`;
    priority.textContent = `${element.priority}`;

    task.appendChild(title);
    task.appendChild(description);
    task.appendChild(dueDate);
    task.appendChild(priority);
    task.appendChild(bre);

    projectList.appendChild(task);
  }
}

btn.addEventListener('click', showForm);

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;

  makeTask(title, description, dueDate, priority);
  updateList();
  hideForm();
});

updateList();

// for (const element of projects) {
//   console.log(element.title);
// }

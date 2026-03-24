document.getElementById('student-form').addEventListener('submit', addStudent);

function addStudent(event) {
  event.preventDefault(); 

  let roll = document.getElementById('student-roll').value.trim();
  let name = document.getElementById('student-name').value.trim();

  if (roll === '' || name === '') {
    alert('Please enter both Roll No. and Student Name');
    return;
  }

  let li = document.createElement('li');
  li.classList.add('student-item');

  let span = document.createElement('span');
  span.textContent = `${roll} – ${name}`;

  let editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('btn-edit');
  editButton.addEventListener('click', function () {
    editStudent(span);
  });

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('btn-delete');
  deleteButton.addEventListener('click', function () {
    deleteStudent(li);
  });

  li.appendChild(span);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  document.getElementById('student-list').appendChild(li);

  document.getElementById('student-roll').value = '';
  document.getElementById('student-name').value = '';
}

function deleteStudent(studentElement) {
  studentElement.remove();
}

function editStudent(studentTextElement) {
  let parts = studentTextElement.textContent.split('–');
  let currentRoll = parts[0] ? parts[0].trim() : '';
  let currentName = parts[1] ? parts[1].trim() : '';

  let newRoll = prompt('Enter new Roll No:', currentRoll);
  if (newRoll === null) return;

  let newName = prompt('Enter new Name:', currentName);
  if (newName === null) return;

  newRoll = newRoll.trim();
  newName = newName.trim();

  if (newRoll === '' || newName === '') {
    alert('Roll No. and Name cannot be empty!');
    return;
  }

  studentTextElement.textContent = `${newRoll} – ${newName}`;
}
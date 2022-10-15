const addTaskbtn = document.querySelector('.btn--add-task');
const taskContainer = document.querySelector('.task-wrapper');
const inputTask = document.querySelector('#input-task');

addTaskbtn.addEventListener('click', function () {
  //* Task container
  let task = document.createElement('div');
  task.classList.add('task');

  //* Li child of task container
  let li = document.createElement('li');
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  //* check button child of task container
  let checkButton = document.createElement('button');
  checkButton.classList.add('btn');

  checkButton.innerHTML = `<ion-icon name="close-outline"></ion-icon>`;
  checkButton.classList.add('check-task');
  task.appendChild(checkButton);

  //* Trash button child of task container
  let trashButton = document.createElement('button');
  trashButton.classList.add('btn');
  trashButton.innerHTML = `<ion-icon name="trash-bin-outline"></ion-icon>`;
  trashButton.classList.add('delete-task');
  task.appendChild(trashButton);

  if (!inputTask.value) return;
  taskContainer.appendChild(task);

  //* Reset input value to empty
  inputTask.value = '';

  checkButton.addEventListener('click', function () {
    checkButton.parentElement.style.textDecoration = 'line-through';
  });

  trashButton.addEventListener('click', (e) => {
    let target = e.target;
    // target.parentElement.parentElement.remove();
    target.closest('.task').remove();
  });
});

var $taskList = document.querySelector('.task-list');

function logTaskList(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var done = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', done);
    done.remove();
  }
}

$taskList.addEventListener('click', logTaskList);

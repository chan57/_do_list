const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Eu ea incididunt sunt consectetur fugiat non',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Eu ea incididunt sunt consectetur fugiat non',
  },
];

(function(arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  // Elemnts UI
  const listContainer = document.querySelector(
    '.tasks-list-section .list-group',
  );
  const containeR = document.querySelector('.tasks-list-section')
  const form = document.forms['addTask'];
  const inputTitle = form.elements['title'];
  const inputBody = form.elements['body'];

  console.log(containeR)
  
  // Events
  renderAllTasks(objOfTasks);
  filterTaskComplete();
  form.addEventListener('submit', onFormSubmitHandler);
  listContainer.addEventListener('click', onDeletehandler);
  listContainer.addEventListener('click', onCompleteHandler);
  

  function filterTaskComplete() {
    const btnFiltrComplete = document.createElement('button');
    btnFiltrComplete.classList.add('btn','ml-auto' , 'btn-primary', 'btcomplete', 'd-flex', 'align-center', 'mx-auto');
    btnFiltrComplete.textContent = 'показать незавершенные задачи';

    const btnFiltrAllTask = document.createElement('button');
    btnFiltrAllTask.classList.add('btn', 'ml-auto', 'btn-secondary', 'btAll', 'd-flex', 'align-center',  'mt-1', 'mx-auto');
    btnFiltrAllTask.textContent = 'показать все задачи';

    const fragmentBtn = document.createDocumentFragment();
    fragmentBtn.appendChild(btnFiltrComplete);
    fragmentBtn.appendChild(btnFiltrAllTask);
    //containeR.appendChild(fragmentBtn);

    containeR.insertAdjacentElement('afterbegin', btnFiltrAllTask);
    containeR.insertAdjacentElement('afterbegin', btnFiltrComplete);

    btnFiltrAllTask.addEventListener('click', funcShowAll)
    btnFiltrComplete.addEventListener('click', funcShowComplete)
  }
  
  function funcShowAll(e){
    console.log('show all task')
    // renderAllTasks(objOfTasks);
  }
  function funcShowComplete(e){
    console.log('show complete task')
    renderCompleteTask()
  }
  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.error('Передайте список задач!');
      messageEpty();
      return;
    }

    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach(task => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  function listItemTemplate({ _id, title, body } = {}) {
    const li = document.createElement('li');
    li.classList.add(
      'list-group-item',
      'd-flex',
      'align-items-center',
      'flex-wrap',
      'mt-2',
      
    );
    li.setAttribute('data-task-id', _id); 

    const span = document.createElement('span');
    span.textContent = title;
    span.style.fontWeight = 'bold';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete task';
    deleteBtn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete!';
    completeBtn.classList.add('btn', 'btn-dark', 'ml-auto', 'btn-complete')

    const article = document.createElement('p');
    article.textContent = body;
    article.classList.add('mt-2', 'w-100');

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);
    li.appendChild(article);

    return li;
  }

  function onFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert('Пожалуйста введите title и body');
      return;
    }

    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);
    listContainer.insertAdjacentElement('afterbegin', listItem);
    form.reset();
  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    };

    objOfTasks[newTask._id] = newTask;

    return { ...newTask };
  }

  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Точно вы хотите удалить задачу: ${title}`);
    if (!isConfirm) return isConfirm;
    delete objOfTasks[id];

    isEmptyListMessage(); 
    return isConfirm;
  }

  function isEmptyListMessage(){
    let taskiiMasiv = [];
    for(let t in objOfTasks){
      taskiiMasiv.push(t)
    }
    
    if(taskiiMasiv.length == 0)  messageEpty('вы удалили все задачи')   
  }

  function messageEpty(text = 'нет заметок') {
    const h1 = document.createElement('h1');
    const fragment1 = document.createDocumentFragment();
    h1.textContent = text;
    fragment1.appendChild(h1);


    listContainer.appendChild(fragment1);
  }

  function deleteTaskFromHtml(confirmed, el) {
    if (!confirmed) return;
    el.remove();
  }

  function onDeletehandler({ target }) {
    if (target.classList.contains('delete-btn')) {
      const parent = target.closest('[data-task-id]');
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHtml(confirmed, parent);
      
    }
  }

  function onCompleteHandler({ target }) {
      if(target.classList.contains('btn-complete')) {
        const parent = target.closest('[data-task-id]');
        changeColorTask(parent);
        
      }
  }
  function changeColorTask(parent){
    parent.classList.add('bg-success')
  }

})(tasks);


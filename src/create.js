import { deleteTask } from './tabs';

// Create tasks on form submit
function createTask(taskTitle, taskDescription, taskDueDate, taskPriority, hidden) {
    const currentTab = document.querySelector('.currentTab').innerHTML;
    const content = document.querySelector('#' + currentTab);



    const task = document.createElement('div');
    if (hidden === true) {
        task.classList.add('hidden')
    } else if (hidden === false) {
        task.classList.remove('hidden')
    }
    const taskLeft = document.createElement('div');
    const taskRight = document.createElement('div');
    const buttons = document.createElement('div');
    
    taskLeft.classList.add('taskLeft');
    taskRight.classList.add('taskRight');
    buttons.classList.add('buttons');

    task.appendChild(taskLeft);
    task.appendChild(taskRight);
    task.appendChild(buttons);

    // Task title creation
    const taskTitleDiv = document.createElement('div');
    const title = document.createElement('h5');
    const titleValue = document.createElement('h3');

    title.innerHTML = 'Title:';
    titleValue.style.minWidth = '120px';
    titleValue.style.maxWidth = '120px';
    titleValue.innerHTML = taskTitle;

    task.classList.add('task');
    taskTitleDiv.classList.add('taskTitle');

    content.appendChild(task);
    taskLeft.appendChild(taskTitleDiv);
    taskTitleDiv.appendChild(title);
    taskTitleDiv.appendChild(titleValue);

    // Task description creation
    const taskDescriptionDiv = document.createElement('div');
    const description = document.createElement('h5');
    const descriptionValue = document.createElement('textarea');

    description.innerHTML = 'Description:';
    descriptionValue.innerHTML = taskDescription;
    descriptionValue.rows = '3';
    descriptionValue.cols = '30';
    descriptionValue.disabled = true;

    taskDescriptionDiv.classList.add('taskDescription');

    taskLeft.appendChild(taskDescriptionDiv);
    taskDescriptionDiv.appendChild(description);
    taskDescriptionDiv.appendChild(descriptionValue);

    // Task due date creation
    const taskDueDateDiv = document.createElement('div');
    const dueDate = document.createElement('h5');
    const dueDateValue = document.createElement('input');

    dueDate.innerHTML = 'Due date:';
    dueDateValue.type = 'date';
    dueDateValue.value = taskDueDate;
    dueDateValue.disabled  = true;

    taskDueDateDiv.classList.add('taskDueDate');

    taskRight.appendChild(taskDueDateDiv);
    taskDueDateDiv.appendChild(dueDate);
    taskDueDateDiv.appendChild(dueDateValue);

    // Task priority creation
    const taskPriorityDiv = document.createElement('div');
    const priority = document.createElement('h5');
    const priorityValue = document.createElement('select');
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');

    priority.innerHTML = 'Priority:'
    option1.innerHTML = 'Low'
    option2.innerHTML = 'Medium'
    option3.innerHTML = 'High'

    if (taskPriority === 'low') {
        option1.selected = true;
    } else if (taskPriority === 'medium') {
        option2.selected = true;
    } else {
        option3.selected = true;
    }

    taskPriorityDiv.classList.add('taskPriority');

    taskRight.appendChild(taskPriorityDiv);
    taskPriorityDiv.appendChild(priority);
    taskPriorityDiv.appendChild(priorityValue);
    priorityValue.appendChild(option1);
    priorityValue.appendChild(option2);
    priorityValue.appendChild(option3);
    priorityValue.disabled = true;

    // Create buttons
    const trashBtn = document.createElement('img');
    const checkbox = document.createElement('input');

    trashBtn.classList.add('icon');
    trashBtn.addEventListener('click', () => {
        deleteTask(event);
    });
    checkbox.classList.add('checkbox')
    trashBtn.src = '/src/png/bin.png'
    checkbox.type = 'checkbox'

    buttons.appendChild(trashBtn);
    buttons.appendChild(checkbox);
}

function createObject(projectTitle) {
    const currentTab = document.querySelector('.currentTab').innerHTML;
    const content = document.querySelector('#' + currentTab);

    const project = document.createElement('div');
    project.classList.add('project');
    content.appendChild(project);

    const projectHead = document.createElement('div');
    projectHead.classList.add('projectHead');
    project.appendChild(projectHead);

    const projectLeft = document.createElement('div');
    const buttons = document.createElement('div');
    projectLeft.classList.add('taskLeft');
    buttons.classList.add('buttons');
    projectHead.appendChild(projectLeft);
    projectHead.appendChild(buttons)

    const projectTitleElement = document.createElement('h1');
    projectTitleElement.innerHTML = projectTitle;
    projectLeft.appendChild(projectTitleElement);

    // const add = document.createElement('h1');
    const deleteIcon = document.createElement('img');
    const checkbox = document.createElement('input');

    // add.classList.add('largeText');
    deleteIcon.classList.add('icon');
    deleteIcon.addEventListener('click', (event) => {
        const location = event.target.parentElement.parentElement.parentElement
        location.remove();
    })
    checkbox.classList.add('checkbox');

    // add.innerHTML = '+'
    // add.addEventListener('click', () => {
    //     appendSubTaskForm();
    // })
    deleteIcon.src = '/src/png/bin.png'
    checkbox.type = 'checkbox';

    // buttons.appendChild(add);
    buttons.appendChild(deleteIcon);
    buttons.appendChild(checkbox);
}

export { createTask, createObject }
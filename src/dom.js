function addToDOM(project) {
    const container = document.querySelector('.body');

    const item = document.createElement('div');
    item.classList.add('project');
    container.appendChild(item);

    const projectHeader = document.createElement('div');
    projectHeader.classList.add('projectHeader');
    item.appendChild(projectHeader);

    const title = document.createElement('h3');
    title.innerHTML = `<u>${project.title}<u>`;
    title.classList.add('projectTitle');
    projectHeader.appendChild(title);

    // Make add task button functional
    const buttons = document.createElement('div');
    buttons.classList.add('projectButtons');
    projectHeader.appendChild(buttons);

    const deleteBtn = document.createElement('img');
    deleteBtn.src = '/src/png/icons8-trash-32.png'
    deleteBtn.classList.add('changeColor');
    deleteBtn.addEventListener('click', () => {
        deleteProject(event);
    });
    buttons.appendChild(deleteBtn);

    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox')
    checkbox.type = 'checkbox';
    buttons.appendChild(checkbox);

    const add = document.createElement('h1');
    add.addEventListener('click', () => {
        addTaskToProject(event);
    });
    add.innerHTML = '+';
    add.classList.add('taskAdd');
    buttons.appendChild(add);
};

function addTaskToProject(event, task) {
    const project = event.target.parentElement.parentElement.parentElement;

    const projectTasks = document.createElement('div');
    projectTasks.classList.add('projectTasks');
    project.appendChild(projectTasks);

    const testText = document.createElement('h3');
    testText.classList.add('taskTitle');
    testText.innerHTML = 'Test';
    projectTasks.appendChild(testText);
};

function deleteProject(event) {
    let project = event.target.parentElement.parentElement.parentElement;
    project.remove();
}

export { addToDOM, addTaskToProject}
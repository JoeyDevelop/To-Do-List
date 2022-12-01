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
    const add = document.createElement('h1');
    add.addEventListener('click', () => {
        addTaskToProject(event);
    });
    add.innerHTML = '+';
    add.classList.add('taskAdd');
    projectHeader.appendChild(add);
};

function addTaskToProject(event, task) {
    const project = event.target.parentElement.parentElement;

    const projectTasks = document.createElement('div');
    projectTasks.classList.add('projectTasks');
    project.appendChild(projectTasks);

    const testText = document.createElement('h3');
    testText.classList.add('taskTitle');
    testText.innerHTML = 'Test';
    projectTasks.appendChild(testText);
};

export { addToDOM, addTaskToProject}
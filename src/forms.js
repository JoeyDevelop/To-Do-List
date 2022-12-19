import { createTask, createObject } from './create';
import { CreateTaskObject, CreateProjectObject } from './factory';

const taskArray = [];
const form = document.querySelector('.form');

function appendForm(currentTab, tabArray) {
    const addButton = document.querySelector('.addText');
        if (currentTab === 'Inbox') {
            addButton.addEventListener('click', () => {
                // Make form visible
                const formHolder = document.querySelector('.formHolder');
                formHolder.style.visibility = 'visible';
                // Disable clicks outside of form when open
                tabArray.forEach(element => {
                    element.classList.add('pointerEventsNone');
                });
                // Apply functions to buttons
                cancelButton(formHolder, tabArray);
            });
        } else if ( currentTab === 'Projects') {
            addButton.addEventListener('click', () => {
                // Make form visible
                const projectFormHolder = document.querySelector('.projectFormHolder');
                projectFormHolder.style.visibility = 'visible';
                // Disable clicks outside of form when open
                tabArray.forEach(element => {
                    element.classList.add('pointerEventsNone');
                });
                // Apply functions to buttons
                cancelProjectButton(projectFormHolder, tabArray);
            });
        }
}

function cancelButton(formHolder, tabArray) {
    const cancelBtn = document.querySelector('#cancelBtn');
    // Reset form inputs, hide form, reEnable tabs
    form.reset();
    cancelBtn.addEventListener('click', () => {
        formHolder.style.visibility = 'hidden';
        tabArray.forEach(item => {
            item.classList.remove('pointerEventsNone');
        });
    });
};

function cancelProjectButton(projectFormHolder, tabArray) {
    const cancelBtn = document.querySelector('#cancelProjectBtn');
    const form = document.querySelector('.projectFormHolder')
    // Reset form inputs, hide form, reEnable tabs
    form.reset();
    cancelBtn.addEventListener('click', () => {
        projectFormHolder.style.visibility = 'hidden';
        tabArray.forEach(item => {
            item.classList.remove('pointerEventsNone');
        });
    });
};

function submitButton(formHolder, tabArray) {
    const submitBtn = document.querySelector('#submitBtn');
    submitBtn.addEventListener('click', () => {
        // Define form inputs
        const taskTitle = document.querySelector('#taskName').value;
        const taskDescription = document.querySelector('#taskDescription').value;
        const taskDueDate = document.querySelector('#dueDate').value;
        const taskPriority = document.querySelector('#taskPriority').value;

        const task = new CreateTaskObject(taskTitle, taskDescription, taskDueDate, taskPriority)

        taskArray.push(task);
        for (let i = 0; i < taskArray.length; i++) {
            taskArray[i].taskNum = [i];
            console.log(taskArray[i].taskNum)
        }
        createTask(task.title, task.description, task.dueDate, task.priority);

        // Hide form
        formHolder.style.visibility = 'hidden';
        tabArray.forEach(item => {
            item.classList.remove('pointerEventsNone');
        });
        form.reset();
    });
}

function submitProjectButton(projectFormHolder, tabArray) {
    const submitBtn = document.querySelector('#submitProjectBtn');
    submitBtn.addEventListener('click', () => {
        // Define form inputs
        const projectTitle = document.querySelector('#projectTitle').value;

        const project = new CreateProjectObject(projectTitle)
        
        createObject(project.title);

        // Hide form
        projectFormHolder.style.visibility = 'hidden';
        tabArray.forEach(item => {
            item.classList.remove('pointerEventsNone');
        });
        form.reset();
    });
}

export { appendForm, cancelButton, submitButton, submitProjectButton, taskArray }
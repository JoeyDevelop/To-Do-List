import { createTask } from './create';
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
                console.log('projects')
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

function submitButton(formHolder, tabArray) {
    const submitBtn = document.querySelector('#submitBtn');
    submitBtn.addEventListener('click', () => {
        // Define form inputs
        const taskTitle = document.querySelector('#taskName').value;
        const taskDescription = document.querySelector('#taskDescription').value;
        const taskDueDate = document.querySelector('#dueDate').value;
        const taskPriority = document.querySelector('#taskPriority').value;
        createTask(taskTitle, taskDescription, taskDueDate, taskPriority);

        // Hide form
        formHolder.style.visibility = 'hidden';
        tabArray.forEach(item => {
            item.classList.remove('pointerEventsNone');
        });
        form.reset();
    });

}

export { appendForm, cancelButton, submitButton }
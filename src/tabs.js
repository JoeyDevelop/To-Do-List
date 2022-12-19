import { cancelButton, submitButton, submitProjectButton, taskArray } from './forms';
import { createTask } from './create';

const formHolder = document.querySelector('.formHolder');
const tabArray = document.querySelectorAll('.tab');
const projectFormHolder = document.querySelector('.projectFormHolder');
cancelButton(formHolder, tabArray);
submitButton(formHolder, tabArray);
submitProjectButton(projectFormHolder, tabArray)


function addBtn() {
    const content = document.querySelector('.content');

    const  addDiv = document.createElement('div');
    addDiv.classList.add('addDiv');
    content.appendChild(addDiv);

    const addText = document.createElement('h1');
    addText.classList.add('addText');
    addText.innerHTML = '+';
    addDiv.appendChild(addText);
};

function addBtnLoad() {
    const addButton = document.querySelector('.addText');
    addButton.addEventListener('click', (event) => {
        formHolder.style.visibility = 'visible';
        tabArray.forEach(item => {
            item.classList.add('pointerEventsNone');
        });
    });
};

function removeAddBtn() {
    const addDiv = document.querySelector('.addDiv');
    addDiv.remove();
};

// Show correct main content functions
function hideTabContent() {
    const tabContent = document.querySelectorAll('.container');
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = 'none';
        };
        const inbox = document.querySelector('#Inbox');
        const daily = document.querySelector('#Daily');
        const weekly = document.querySelector('#Weekly');
        removeAllChildNodes(inbox);
        removeAllChildNodes(daily)
        removeAllChildNodes(weekly)

        function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
};

function showTabContent(currentTab) {
    // Define Dates
    const today = new Date().toISOString().slice(0, 10);
    const weekArray = [];
    let day2 = new Date();
    let day3 = new Date();
    let day4 = new Date();
    let day5 = new Date();
    let day6 = new Date();
    let day7 = new Date();

    day2.setDate(day2.getDate() + 1);
    day3.setDate(day3.getDate() + 2);
    day4.setDate(day4.getDate() + 3);
    day5.setDate(day5.getDate() + 4);
    day6.setDate(day6.getDate() + 5);
    day7.setDate(day7.getDate() + 6);

    day2 = day2.toISOString().slice(0, 10);
    day3 = day3.toISOString().slice(0, 10);
    day4 = day4.toISOString().slice(0, 10);
    day5 = day5.toISOString().slice(0, 10);
    day6 = day6.toISOString().slice(0, 10);
    day7 = day7.toISOString().slice(0, 10);
    weekArray.push(today, day2, day3, day4, day5, day6, day7)

    const currentTabContent = document.getElementById(currentTab);
    currentTabContent.style.display = '';
    if (currentTab === 'Daily' || currentTab === 'Weekly') {
        const hideAddBtn = document.querySelector('.addDiv')
        hideAddBtn.style.visibility = 'hidden';
    } if (currentTab === 'Daily') {
        for (let i = 0; i < taskArray.length; i++) {
            if (taskArray[i].dueDate === today) {
                createTask(taskArray[i].title, taskArray[i].description, taskArray[i].dueDate, taskArray[i].priority, false)
            } else if (taskArray[i].dueDate !== today) {
                createTask(taskArray[i].title, taskArray[i].description, taskArray[i].dueDate, taskArray[i].priority, true)
            }
        }
    } else if (currentTab === 'Weekly') {
        for (let i = 0; i < taskArray.length; i++) {
            if (taskArray[i].dueDate === today ||
                taskArray[i].dueDate === day2 ||
                taskArray[i].dueDate === day3 ||
                taskArray[i].dueDate === day4 ||
                taskArray[i].dueDate === day5 ||
                taskArray[i].dueDate === day6 ||
                taskArray[i].dueDate === day7) {
                    createTask(taskArray[i].title, taskArray[i].description, taskArray[i].dueDate, taskArray[i].priority, false)
                } else if (taskArray[i].dueDate === today ||
                    taskArray[i].dueDate !== day2 ||
                    taskArray[i].dueDate !== day3 ||
                    taskArray[i].dueDate !== day4 ||
                    taskArray[i].dueDate !== day5 ||
                    taskArray[i].dueDate !== day6 ||
                    taskArray[i].dueDate !== day7) {
                        createTask(taskArray[i].title, taskArray[i].description, taskArray[i].dueDate, taskArray[i].priority, true)
                    }
        }
    } else if (currentTab === 'Inbox') {
        for (let i = 0; i < taskArray.length; i++) {
            createTask(taskArray[i].title, taskArray[i].description, taskArray[i].dueDate, taskArray[i].priority)
        }
    }
};

function deleteTask(event) {
    const taskDOMArray = document.querySelectorAll('.task')
    for (let i = 0; i < taskArray.length; i++) {
        taskArray[i].taskNum = [i];
        taskDOMArray[i].setAttribute('taskNum', [i])
        console.log(taskArray[i].taskNum)
    }

    const taskNum = event.target.parentElement.parentElement.getAttribute('taskNum');
    taskArray.splice(taskNum, 1)

    const task = event.target.parentElement.parentElement;
    task.remove();
};

export { addBtn, addBtnLoad, removeAddBtn, hideTabContent, showTabContent, deleteTask }
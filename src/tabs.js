import { cancelButton } from './forms';

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
    const formHolder = document.querySelector('.formHolder');
    formHolder.style.visibility = 'visible';
    const tabArray = document.querySelectorAll('.tab');
    tabArray.forEach(item => {
        item.classList.add('pointerEventsNone');
    });
    cancelButton(formHolder, tabArray);
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
};

function showTabContent(currentTab) {
    const currentTabContent = document.getElementById(currentTab);
    currentTabContent.style.display = '';
};

export { addBtn, addBtnLoad, removeAddBtn, hideTabContent, showTabContent }
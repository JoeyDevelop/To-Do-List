import { addBtn, addBtnLoad, removeAddBtn, hideTabContent, showTabContent } from './tabs';
import { appendForm } from './forms'

function dom() {
    // Setup DOM
    addBtnLoad();
    hideTabContent();
    showTabContent(document.querySelector('.currentTab').innerHTML)

    // Add active class on click & remove active tab from other elements
    const tabArray = document.querySelectorAll('.tab');
    tabArray.forEach(item => {
        item.addEventListener('click', () => {
            tabArray.forEach(item => {
                item.classList.remove('active');
            });
            item.classList.add('active');
            changeTab();
        })
    })

    // Change tab indicator and display tab content
    function changeTab() {
        // Delete and create new add button for new event listeners !!LIKELY TO CHANGE
        const currentTab = document.querySelector('.active').innerHTML;
        const tabIndicator = document.querySelector('.currentTab');
        tabIndicator.innerHTML = currentTab;

        // Append correct content
        removeAddBtn()
        addBtn();
        hideTabContent();
        showTabContent(currentTab);

        // Open correct form 
        appendForm(currentTab, tabArray);
    };
};

export { dom }
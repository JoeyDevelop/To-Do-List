function dom() {
    // Setup DOM
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
        removeAddBtn()
        addBtn()

        const currentTab = document.querySelector('.currentTab');
        currentTab.innerHTML = document.querySelector('.active').innerHTML;

        hideTabContent();
        showTabContent(currentTab.innerHTML);
    };
};

// Create and delete add button functions
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
    console.log(currentTab)
    const currentTabContent = document.getElementById(currentTab);
    currentTabContent.style.display = '';
};

export { dom }
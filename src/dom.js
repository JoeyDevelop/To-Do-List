function dom() {
    const tabArray = document.querySelectorAll('.tab');
    // Add active class on click & remove active tab from other elements
    tabArray.forEach(item => {
        item.addEventListener('click', () => {
            tabArray.forEach(item => {
                item.classList.remove('active');
            });
            removeAddBtn()
            addBtn()
            item.classList.add('active');
            changeTab();
        })
    })

    // Change tab indicator to show current tab correctly
    function changeTab() {
        const currentTab = document.querySelector('.currentTab');
        currentTab.innerHTML = document.querySelector('.active').innerHTML;
    }
    
}

function addBtn() {
    const content = document.querySelector('.content');

    const  addDiv = document.createElement('div');
    addDiv.classList.add('addDiv');
    content.appendChild(addDiv);

    const addText = document.createElement('h1');
    addText.classList.add('addText');
    addText.innerHTML = '+';
    addDiv.appendChild(addText);
    }

function removeAddBtn() {
    const addDiv = document.querySelector('.addDiv');
    addDiv.remove();
}

export { dom }
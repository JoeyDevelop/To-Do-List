function dom() {
    const tabArray = document.querySelectorAll('.tab');
    // Add active class on click & remove active tab from other elements
    tabArray.forEach(item => {
        item.addEventListener('click', () => {
            tabArray.forEach(item => {
                item.classList.remove('active');
            });
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

export default dom
import { projectForm } from "./form" ;

const btn = document.querySelector('.add');
btn.addEventListener('click', () => {
    if (document.body.contains(document.querySelector('.projectFormContainer'))) {
        return;
    } else {
    projectForm();
    }
});

// Note: Try using array.splice(array.indexOf('object'), 1) when implementing delete button
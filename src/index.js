import { projectForm } from "./form" ;

const btn = document.querySelector('.add');
btn.addEventListener('click', () => {
    if (document.body.contains(document.querySelector('.projectFormContainer'))) {
        return;
    } else {
    projectForm(event);
    }
});
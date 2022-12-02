import { addToDOM } from "./dom";
import { createProject } from "./tasks";

let projectArray = [];

function projectForm() {
    
    const headerRight = document.querySelector('.headerRight')
    const addProjectBtn = document.querySelector('.add');
    
    const projectFormDiv = document.createElement('div');
    projectFormDiv.classList.add('projectFormContainer');
    headerRight.insertBefore(projectFormDiv, addProjectBtn);

    const projectFormInput = document.createElement('input');
    projectFormInput.type = 'text';
    projectFormInput.classList.add('projectFormInput');
    projectFormDiv.appendChild(projectFormInput);

    const projectFormInputBtn = document.createElement('button');
    projectFormInputBtn.classList.add('projectFormInputBtn');
    projectFormInputBtn.type = 'button';
    projectFormInputBtn.innerHTML = 'Add';
    projectFormInputBtn.addEventListener('click', () => {
        submitProjectForm(projectFormInput.value);
        projectFormDiv.remove();
    });
    projectFormDiv.appendChild(projectFormInputBtn);
};

function submitProjectForm(title) {   
    if (title === '') {
        return;
    } else {
        let project = new createProject(title);
    projectArray.push(new createProject(project));
    addToDOM(project);
    console.log(projectArray);
    }
};

export { projectForm }
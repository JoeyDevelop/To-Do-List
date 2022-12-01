import { createProject, createTask } from "./tasks";
import { addToDOM, addTaskToProject} from "./dom";

let projectArray = [];


//create main control logic function
const btn = document.querySelector('.add');
btn.addEventListener('click', () => {
    let project2 = new createProject('Get ready for bed');
    addToDOM(project2);
});

let project0 = new createProject('Go to work');
let project1 = new createProject('Coach basketball');
addToDOM(project0);
addToDOM(project1);
let task1 = new createTask('sweep', 'clean the floors', 'Dec 2nd', 'high');
console.log(projectArray);
import { createProject, createTask } from "./tasks";

let project1 = new createProject('go to work')
let task1 = new createTask('sweep', 'clean the floors', 'Dec 2nd', 'high');
console.log(project1, task1);
import { addTaskToProject, addToDOM } from './dom'
import { createProject } from './tasks'

const projectArray = []

function projectForm (event) {
  const headerRight = event.target.parentElement
  const addProjectBtn = event.target

  const projectFormDiv = document.createElement('div')
  projectFormDiv.classList.add('projectFormContainer')
  headerRight.insertBefore(projectFormDiv, addProjectBtn)

  const projectFormInput = document.createElement('input')
  if (headerRight.classList.contains('headerRight')) {
    projectFormInput.classList.add('projectFormInput')
  } else {
    projectFormInput.classList.add('taskFormInput')
  }
  projectFormInput.type = 'text'
  projectFormDiv.appendChild(projectFormInput)

  const projectFormInputBtn = document.createElement('button')
  projectFormInputBtn.classList.add('projectFormInputBtn')
  projectFormInputBtn.type = 'button'
  projectFormInputBtn.innerHTML = 'Add'
  projectFormInputBtn.addEventListener('click', () => {
    submitProjectForm(projectFormInput.value)
    projectFormDiv.remove()
  })
  projectFormDiv.appendChild(projectFormInputBtn)

  function submitProjectForm (title) {
    if (title === '') {

    } else if (headerRight.classList.contains('headerRight')) {
      const project = new createProject(title)
      addToDOM(project)
    } else {
      addTaskToProject(event, title)
    }
  };
};

export { projectForm }

import { projectForm } from './form'

function addToDOM (project) {
  const container = document.querySelector('.body')

  const item = document.createElement('div')
  item.classList.add('project')
  container.appendChild(item)

  const projectHeader = document.createElement('div')
  projectHeader.classList.add('projectHeader')
  item.appendChild(projectHeader)

  const title = document.createElement('h3')
  title.innerHTML = `${project.title}`
  title.classList.add('projectTitle')
  projectHeader.appendChild(title)

  const buttons = document.createElement('div')
  deleteAndCheckbox(projectHeader, buttons)

  const add = document.createElement('h1')
  add.addEventListener('click', () => {
    // addTaskToProject(event);
    if (document.body.contains(document.querySelector('.taskFormInput'))) {

    } else {
      projectForm(event)
    }
  })
  add.innerHTML = '+'
  add.classList.add('taskAdd')
  buttons.appendChild(add)
};

function addTaskToProject (event, title) {
  const project = event.target.parentElement.parentElement.parentElement

  const projectTasks = document.createElement('div')
  projectTasks.classList.add('projectTasks')
  project.appendChild(projectTasks)

  const taskItems = document.createElement('div')
  taskItems.classList.add('taskItems')
  projectTasks.appendChild(taskItems)

  const taskTitle = document.createElement('h3')
  taskTitle.classList.add('taskTitle')
  taskTitle.innerHTML = title
  taskItems.appendChild(taskTitle)

  const buttons = document.createElement('div')
  deleteAndCheckbox(taskItems, buttons)
};

function deleteProject (event) {
  const project = event.target.parentElement.parentElement.parentElement
  project.remove()
}

function deleteAndCheckbox (location, buttons) {
  buttons.classList.add('projectButtons')
  location.appendChild(buttons)

  const deleteBtn = document.createElement('img')
  deleteBtn.src = '/src/png/icons8-trash-32.png'
  deleteBtn.classList.add('changeColor')
  deleteBtn.addEventListener('click', () => {
    deleteProject(event)
  })
  buttons.appendChild(deleteBtn)

  const checkbox = document.createElement('input')
  checkbox.classList.add('checkbox')
  checkbox.type = 'checkbox'
  buttons.appendChild(checkbox)
}

export { addToDOM, addTaskToProject }

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createObject\": () => (/* binding */ createObject),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask)\n/* harmony export */ });\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\n\n// Create tasks on form submit\nfunction createTask(taskTitle, taskDescription, taskDueDate, taskPriority, hidden) {\n    const currentTab = document.querySelector('.currentTab').innerHTML;\n    const content = document.querySelector('#' + currentTab);\n\n\n\n    const task = document.createElement('div');\n    if (hidden === true) {\n        task.classList.add('hidden')\n    } else if (hidden === false) {\n        task.classList.remove('hidden')\n    }\n    const taskLeft = document.createElement('div');\n    const taskRight = document.createElement('div');\n    const buttons = document.createElement('div');\n    \n    taskLeft.classList.add('taskLeft');\n    taskRight.classList.add('taskRight');\n    buttons.classList.add('buttons');\n\n    task.appendChild(taskLeft);\n    task.appendChild(taskRight);\n    task.appendChild(buttons);\n\n    // Task title creation\n    const taskTitleDiv = document.createElement('div');\n    const title = document.createElement('h5');\n    const titleValue = document.createElement('h3');\n\n    title.innerHTML = 'Title:';\n    titleValue.style.minWidth = '120px';\n    titleValue.style.maxWidth = '120px';\n    titleValue.innerHTML = taskTitle;\n\n    task.classList.add('task');\n    taskTitleDiv.classList.add('taskTitle');\n\n    content.appendChild(task);\n    taskLeft.appendChild(taskTitleDiv);\n    taskTitleDiv.appendChild(title);\n    taskTitleDiv.appendChild(titleValue);\n\n    // Task description creation\n    const taskDescriptionDiv = document.createElement('div');\n    const description = document.createElement('h5');\n    const descriptionValue = document.createElement('textarea');\n\n    description.innerHTML = 'Description:';\n    descriptionValue.innerHTML = taskDescription;\n    descriptionValue.rows = '3';\n    descriptionValue.cols = '30';\n    descriptionValue.disabled = true;\n\n    taskDescriptionDiv.classList.add('taskDescription');\n\n    taskLeft.appendChild(taskDescriptionDiv);\n    taskDescriptionDiv.appendChild(description);\n    taskDescriptionDiv.appendChild(descriptionValue);\n\n    // Task due date creation\n    const taskDueDateDiv = document.createElement('div');\n    const dueDate = document.createElement('h5');\n    const dueDateValue = document.createElement('input');\n\n    dueDate.innerHTML = 'Due date:';\n    dueDateValue.type = 'date';\n    dueDateValue.value = taskDueDate;\n    dueDateValue.disabled  = true;\n\n    taskDueDateDiv.classList.add('taskDueDate');\n\n    taskRight.appendChild(taskDueDateDiv);\n    taskDueDateDiv.appendChild(dueDate);\n    taskDueDateDiv.appendChild(dueDateValue);\n\n    // Task priority creation\n    const taskPriorityDiv = document.createElement('div');\n    const priority = document.createElement('h5');\n    const priorityValue = document.createElement('select');\n    const option1 = document.createElement('option');\n    const option2 = document.createElement('option');\n    const option3 = document.createElement('option');\n\n    priority.innerHTML = 'Priority:'\n    option1.innerHTML = 'Low'\n    option2.innerHTML = 'Medium'\n    option3.innerHTML = 'High'\n\n    if (taskPriority === 'low') {\n        option1.selected = true;\n    } else if (taskPriority === 'medium') {\n        option2.selected = true;\n    } else {\n        option3.selected = true;\n    }\n\n    taskPriorityDiv.classList.add('taskPriority');\n\n    taskRight.appendChild(taskPriorityDiv);\n    taskPriorityDiv.appendChild(priority);\n    taskPriorityDiv.appendChild(priorityValue);\n    priorityValue.appendChild(option1);\n    priorityValue.appendChild(option2);\n    priorityValue.appendChild(option3);\n    priorityValue.disabled = true;\n\n    // Create buttons\n    const trashBtn = document.createElement('img');\n    const checkbox = document.createElement('input');\n\n    trashBtn.classList.add('icon');\n    trashBtn.addEventListener('click', () => {\n        (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(event);\n    });\n    checkbox.classList.add('checkbox')\n    trashBtn.src = '/src/png/bin.png'\n    checkbox.type = 'checkbox'\n\n    buttons.appendChild(trashBtn);\n    buttons.appendChild(checkbox);\n}\n\nfunction createObject(projectTitle) {\n    const currentTab = document.querySelector('.currentTab').innerHTML;\n    const content = document.querySelector('#' + currentTab);\n\n    const project = document.createElement('div');\n    project.classList.add('project');\n    content.appendChild(project);\n\n    const projectHead = document.createElement('div');\n    projectHead.classList.add('projectHead');\n    project.appendChild(projectHead);\n\n    const projectLeft = document.createElement('div');\n    const buttons = document.createElement('div');\n    projectLeft.classList.add('taskLeft');\n    buttons.classList.add('buttons');\n    projectHead.appendChild(projectLeft);\n    projectHead.appendChild(buttons)\n\n    const projectTitleElement = document.createElement('h1');\n    projectTitleElement.innerHTML = projectTitle;\n    projectLeft.appendChild(projectTitleElement);\n\n    // const add = document.createElement('h1');\n    const deleteIcon = document.createElement('img');\n    const checkbox = document.createElement('input');\n\n    // add.classList.add('largeText');\n    deleteIcon.classList.add('icon');\n    deleteIcon.addEventListener('click', (event) => {\n        const location = event.target.parentElement.parentElement.parentElement\n        location.remove();\n    })\n    checkbox.classList.add('checkbox');\n\n    // add.innerHTML = '+'\n    // add.addEventListener('click', () => {\n    //     appendSubTaskForm();\n    // })\n    deleteIcon.src = '/src/png/bin.png'\n    checkbox.type = 'checkbox';\n\n    // buttons.appendChild(add);\n    buttons.appendChild(deleteIcon);\n    buttons.appendChild(checkbox);\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/create.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n\n\n\nfunction dom() {\n    // Setup DOM\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.addBtnLoad)();\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.hideTabContent)();\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.showTabContent)(document.querySelector('.currentTab').innerHTML)\n\n    // Add active class on click & remove active tab from other elements\n    const tabArray = document.querySelectorAll('.tab');\n    tabArray.forEach(item => {\n        item.addEventListener('click', () => {\n            tabArray.forEach(item => {\n                item.classList.remove('active');\n            });\n            item.classList.add('active');\n            changeTab();\n        })\n    })\n\n    // Change tab indicator and display tab content\n    function changeTab() {\n        // Delete and create new add button for new event listeners !!LIKELY TO CHANGE\n        const currentTab = document.querySelector('.active').innerHTML;\n        const tabIndicator = document.querySelector('.currentTab');\n        tabIndicator.innerHTML = currentTab;\n\n        // Append correct content\n        (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.removeAddBtn)()\n        ;(0,_tabs__WEBPACK_IMPORTED_MODULE_0__.addBtn)();\n        (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.hideTabContent)();\n        (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.showTabContent)(currentTab);\n\n        // Open correct form \n        (0,_forms__WEBPACK_IMPORTED_MODULE_1__.appendForm)(currentTab, tabArray);\n    };\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateProjectObject\": () => (/* binding */ CreateProjectObject),\n/* harmony export */   \"CreateTaskObject\": () => (/* binding */ CreateTaskObject)\n/* harmony export */ });\nfunction CreateTaskObject(title, description, dueDate, priority) {\n    return {\n        title,\n        description,\n        dueDate,\n        priority,\n        taskNum: 0,\n    }\n}\n\nfunction CreateProjectObject(title) {\n    return {\n        title,\n    }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/factory.js?");

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendForm\": () => (/* binding */ appendForm),\n/* harmony export */   \"cancelButton\": () => (/* binding */ cancelButton),\n/* harmony export */   \"submitButton\": () => (/* binding */ submitButton),\n/* harmony export */   \"submitProjectButton\": () => (/* binding */ submitProjectButton),\n/* harmony export */   \"taskArray\": () => (/* binding */ taskArray)\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory */ \"./src/factory.js\");\n\n\n\nconst taskArray = [];\nconst form = document.querySelector('.form');\n\nfunction appendForm(currentTab, tabArray) {\n    const addButton = document.querySelector('.addText');\n        if (currentTab === 'Inbox') {\n            addButton.addEventListener('click', () => {\n                // Make form visible\n                const formHolder = document.querySelector('.formHolder');\n                formHolder.style.visibility = 'visible';\n                // Disable clicks outside of form when open\n                tabArray.forEach(element => {\n                    element.classList.add('pointerEventsNone');\n                });\n                // Apply functions to buttons\n                cancelButton(formHolder, tabArray);\n            });\n        } else if ( currentTab === 'Projects') {\n            addButton.addEventListener('click', () => {\n                // Make form visible\n                const projectFormHolder = document.querySelector('.projectFormHolder');\n                projectFormHolder.style.visibility = 'visible';\n                // Disable clicks outside of form when open\n                tabArray.forEach(element => {\n                    element.classList.add('pointerEventsNone');\n                });\n                // Apply functions to buttons\n                cancelProjectButton(projectFormHolder, tabArray);\n            });\n        }\n}\n\nfunction cancelButton(formHolder, tabArray) {\n    const cancelBtn = document.querySelector('#cancelBtn');\n    // Reset form inputs, hide form, reEnable tabs\n    form.reset();\n    cancelBtn.addEventListener('click', () => {\n        formHolder.style.visibility = 'hidden';\n        tabArray.forEach(item => {\n            item.classList.remove('pointerEventsNone');\n        });\n    });\n};\n\nfunction cancelProjectButton(projectFormHolder, tabArray) {\n    const cancelBtn = document.querySelector('#cancelProjectBtn');\n    const form = document.querySelector('.projectFormHolder')\n    // Reset form inputs, hide form, reEnable tabs\n    form.reset();\n    cancelBtn.addEventListener('click', () => {\n        projectFormHolder.style.visibility = 'hidden';\n        tabArray.forEach(item => {\n            item.classList.remove('pointerEventsNone');\n        });\n    });\n};\n\nfunction submitButton(formHolder, tabArray) {\n    const submitBtn = document.querySelector('#submitBtn');\n    submitBtn.addEventListener('click', () => {\n        // Define form inputs\n        const taskTitle = document.querySelector('#taskName').value;\n        const taskDescription = document.querySelector('#taskDescription').value;\n        const taskDueDate = document.querySelector('#dueDate').value;\n        const taskPriority = document.querySelector('#taskPriority').value;\n\n        const task = new _factory__WEBPACK_IMPORTED_MODULE_1__.CreateTaskObject(taskTitle, taskDescription, taskDueDate, taskPriority)\n\n        taskArray.push(task);\n        for (let i = 0; i < taskArray.length; i++) {\n            taskArray[i].taskNum = [i];\n            console.log(taskArray[i].taskNum)\n        }\n        (0,_create__WEBPACK_IMPORTED_MODULE_0__.createTask)(task.title, task.description, task.dueDate, task.priority);\n\n        // Hide form\n        formHolder.style.visibility = 'hidden';\n        tabArray.forEach(item => {\n            item.classList.remove('pointerEventsNone');\n        });\n        form.reset();\n    });\n}\n\nfunction submitProjectButton(projectFormHolder, tabArray) {\n    const submitBtn = document.querySelector('#submitProjectBtn');\n    submitBtn.addEventListener('click', () => {\n        // Define form inputs\n        const projectTitle = document.querySelector('#projectTitle').value;\n\n        const project = new _factory__WEBPACK_IMPORTED_MODULE_1__.CreateProjectObject(projectTitle)\n        \n        ;(0,_create__WEBPACK_IMPORTED_MODULE_0__.createObject)(project.title);\n\n        // Hide form\n        projectFormHolder.style.visibility = 'hidden';\n        tabArray.forEach(item => {\n            item.classList.remove('pointerEventsNone');\n        });\n        form.reset();\n    });\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/forms.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.dom)()\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBtn\": () => (/* binding */ addBtn),\n/* harmony export */   \"addBtnLoad\": () => (/* binding */ addBtnLoad),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"hideTabContent\": () => (/* binding */ hideTabContent),\n/* harmony export */   \"removeAddBtn\": () => (/* binding */ removeAddBtn),\n/* harmony export */   \"showTabContent\": () => (/* binding */ showTabContent)\n/* harmony export */ });\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n\n\n\nconst formHolder = document.querySelector('.formHolder');\nconst tabArray = document.querySelectorAll('.tab');\nconst projectFormHolder = document.querySelector('.projectFormHolder');\n(0,_forms__WEBPACK_IMPORTED_MODULE_0__.cancelButton)(formHolder, tabArray);\n(0,_forms__WEBPACK_IMPORTED_MODULE_0__.submitButton)(formHolder, tabArray);\n(0,_forms__WEBPACK_IMPORTED_MODULE_0__.submitProjectButton)(projectFormHolder, tabArray)\n\n\nfunction addBtn() {\n    const content = document.querySelector('.content');\n\n    const  addDiv = document.createElement('div');\n    addDiv.classList.add('addDiv');\n    content.appendChild(addDiv);\n\n    const addText = document.createElement('h1');\n    addText.classList.add('addText');\n    addText.innerHTML = '+';\n    addDiv.appendChild(addText);\n};\n\nfunction addBtnLoad() {\n    const addButton = document.querySelector('.addText');\n    addButton.addEventListener('click', (event) => {\n        formHolder.style.visibility = 'visible';\n        tabArray.forEach(item => {\n            item.classList.add('pointerEventsNone');\n        });\n    });\n};\n\nfunction removeAddBtn() {\n    const addDiv = document.querySelector('.addDiv');\n    addDiv.remove();\n};\n\n// Show correct main content functions\nfunction hideTabContent() {\n    const tabContent = document.querySelectorAll('.container');\n        for (let i = 0; i < tabContent.length; i++) {\n            tabContent[i].style.display = 'none';\n        };\n        const inbox = document.querySelector('#Inbox');\n        const daily = document.querySelector('#Daily');\n        const weekly = document.querySelector('#Weekly');\n        removeAllChildNodes(inbox);\n        removeAllChildNodes(daily)\n        removeAllChildNodes(weekly)\n\n        function removeAllChildNodes(parent) {\n            while (parent.firstChild) {\n                parent.removeChild(parent.firstChild);\n            }\n        }\n};\n\nfunction showTabContent(currentTab) {\n    // Define Dates\n    const today = new Date().toISOString().slice(0, 10);\n    const weekArray = [];\n    let day2 = new Date();\n    let day3 = new Date();\n    let day4 = new Date();\n    let day5 = new Date();\n    let day6 = new Date();\n    let day7 = new Date();\n\n    day2.setDate(day2.getDate() + 1);\n    day3.setDate(day3.getDate() + 2);\n    day4.setDate(day4.getDate() + 3);\n    day5.setDate(day5.getDate() + 4);\n    day6.setDate(day6.getDate() + 5);\n    day7.setDate(day7.getDate() + 6);\n\n    day2 = day2.toISOString().slice(0, 10);\n    day3 = day3.toISOString().slice(0, 10);\n    day4 = day4.toISOString().slice(0, 10);\n    day5 = day5.toISOString().slice(0, 10);\n    day6 = day6.toISOString().slice(0, 10);\n    day7 = day7.toISOString().slice(0, 10);\n    weekArray.push(today, day2, day3, day4, day5, day6, day7)\n\n    const currentTabContent = document.getElementById(currentTab);\n    currentTabContent.style.display = '';\n    if (currentTab === 'Daily' || currentTab === 'Weekly') {\n        const hideAddBtn = document.querySelector('.addDiv')\n        hideAddBtn.style.visibility = 'hidden';\n    } if (currentTab === 'Daily') {\n        for (let i = 0; i < _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray.length; i++) {\n            if (_forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate === today) {\n                (0,_create__WEBPACK_IMPORTED_MODULE_1__.createTask)(_forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].title, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].description, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].priority, false)\n            } else if (_forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate !== today) {\n                (0,_create__WEBPACK_IMPORTED_MODULE_1__.createTask)(_forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].title, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].description, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].priority, true)\n            }\n        }\n    } else if (currentTab === 'Weekly') {\n        for (let i = 0; i < _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray.length; i++) {\n            if (_forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate === today ||\n                _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate === day2 ||\n                _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate === day3 ||\n                _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate === day4 ||\n                _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate === day5 ||\n                _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate === day6 ||\n                _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate === day7) {\n                    (0,_create__WEBPACK_IMPORTED_MODULE_1__.createTask)(_forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].title, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].description, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].priority, false)\n                } else if (_forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate === today ||\n                    _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate !== day2 ||\n                    _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate !== day3 ||\n                    _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate !== day4 ||\n                    _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate !== day5 ||\n                    _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate !== day6 ||\n                    _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate !== day7) {\n                        (0,_create__WEBPACK_IMPORTED_MODULE_1__.createTask)(_forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].title, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].description, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].priority, true)\n                    }\n        }\n    } else if (currentTab === 'Inbox') {\n        for (let i = 0; i < _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray.length; i++) {\n            (0,_create__WEBPACK_IMPORTED_MODULE_1__.createTask)(_forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].title, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].description, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate, _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].priority)\n        }\n    }\n};\n\nfunction deleteTask(event) {\n    const taskDOMArray = document.querySelectorAll('.task')\n    for (let i = 0; i < _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray.length; i++) {\n        _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].taskNum = [i];\n        taskDOMArray[i].setAttribute('taskNum', [i])\n        console.log(_forms__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].taskNum)\n    }\n\n    const taskNum = event.target.parentElement.parentElement.getAttribute('taskNum');\n    _forms__WEBPACK_IMPORTED_MODULE_0__.taskArray.splice(taskNum, 1)\n\n    const task = event.target.parentElement.parentElement;\n    task.remove();\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;